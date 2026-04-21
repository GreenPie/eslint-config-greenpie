---
name: oxlint-changelog
description: Parse Oxlint release notes and turn rule-related entries into an action plan for the current repository. Use this whenever the user pastes an Oxlint changelog, links an Oxlint release, asks what rule changes matter for the active lint-config repo, or wants release notes mapped to that repo's oxlint and ESLint config files. Also use it when the user wants those approved changelog changes implemented; analyze first, then hand off rule add/migrate work to add-rule when that skill is available.
---

# Reviewing Oxlint Changelog Impact

Use this skill to triage **Oxlint release notes** for this repository.

The goal is to answer one question clearly:

> "Which changelog entries actually matter for the current repository, and what would we change?"

Default to **analysis only**. Do **not** edit the repo just because the changelog mentions a rule. Only apply changes when the user explicitly asks for implementation.

## Accepted inputs

Support these inputs:

- pasted plain text
- fenced markdown code block
- URL to an Oxlint / Oxc release page

If the user gives a URL, fetch it and extract the release-note text before analyzing.

## Repository boundaries

Determine supported plugins from the active repository's Oxlint config instead of assuming them.

- If the repo has a `plugins` list in its Oxlint config, treat only those plugins as supported.
- If the plugin is not enabled in the current repo, classify changelog entries for it as `ignored`.
- Do not suggest adding support for a new plugin unless the user explicitly asks for that separate feature.

Example: `jest` should be `ignored` in any repo that does not enable the `jest` plugin.

## Repo files that matter

Inspect the current repository's Oxlint config and the rule-config files that are the source of truth for lint behavior before making conclusions.

In repos that follow this project's layout, start with:

- `configs/oxlintrc.jsonc`
- `configs/base.js`
- `configs/typescript.js`
- `configs/stylistic.js`
- `configs/vue.js`
- `.agents/skills/add-rule/SKILL.md`

If an `add-rule` skill is available, use it as the source of truth for namespace-to-file mapping and for implementation handoff. If it is not available, perform the equivalent careful rule-add / migrate workflow yourself.

### Namespace mapping

Map namespaces to the active repository's config layout.

In repos that follow this project's structure, use this as the default mapping:

| oxlint namespace | Primary target files |
|---|---|
| `eslint/*` | `configs/oxlintrc.jsonc`, `configs/base.js` |
| `typescript/*` | `configs/oxlintrc.jsonc`, `configs/typescript.js` |
| `stylistic/*` | `configs/oxlintrc.jsonc`, `configs/stylistic.js` |
| `vue/*` | `configs/oxlintrc.jsonc`, `configs/vue.js` |
| `import/*`, `jsdoc/*`, `oxc/*`, `promise/*`, `unicorn/*`, `vitest/*` | usually `configs/oxlintrc.jsonc` only, unless repository-specific follow-up is clearly needed |

## How to read Oxlint changelog entries

Work entry by entry. Do not flatten the whole changelog into a vague summary.

If an entry is outside the linter surface entirely — for example allocator, parser, codegen, formatter, or other engine internals with no rule/config impact — classify it as `ignored`.

### 1. Identify the likely rule namespace

Use these heuristics:

- `linter/<plugin>:` usually points at that plugin namespace.
- `linter/<rule-name>:` with no plugin namespace usually refers to an ESLint core rule, so start with `eslint/<rule-name>`.
- `linter:` or `linter/plugins:` without a clear rule usually means infrastructure, metadata, or diagnostics work, not a direct config change.
- If the rule name is only present in the message body, extract it from there and verify it against the repository's config files before proposing edits.

If the namespace is ambiguous, say so and mark the item as `investigate` instead of inventing certainty.

### 2. Check whether the repository already uses that rule

Inspect the relevant config files and classify the current state:

- already enabled in oxlint
- already disabled in ESLint in favor of oxlint
- still active only in ESLint / typescript-eslint / vue / stylistic
- not configured in the current repository

This matters because the same changelog line can imply different follow-up:

- **new oxlint implementation of a rule already enforced via ESLint** → likely `add` / `migrate`
- **rename / replacement / deprecation** → likely `replace` or `remove`
- **new option or behavior fix on a rule already configured** → likely `adjust` or `review-only`
- **diagnostic, autofix, suggestion, metadata, docs only** → usually `review-only`

### 3. Classify the impact conservatively

Use one of these outcomes:

- `add` — introduce a new oxlint rule to `configs/oxlintrc.jsonc`
- `migrate` — move enforcement from ESLint-side config to oxlint
- `replace` — swap an old rule for a new rule or renamed rule
- `remove` — delete a rule that is obsolete or no longer valid
- `adjust` — update options or repository-specific config for an already used rule
- `review-only` — notable change, but no clear repository edit should be made automatically
- `ignored` — unsupported plugin or clearly irrelevant to the current repository
- `investigate` — plausible impact, but the correct repository action is not yet proven

Prefer `review-only` or `investigate` over overclaiming.

## What counts as actionable

Treat an entry as actionable only when there is a concrete repository change implied by both:

1. the changelog text, and
2. the repository's current config state

Good examples of actionable items:

- a supported oxlint rule has just been implemented and the repository still enforces the equivalent ESLint rule
- a supported rule was renamed or replaced and the repository currently uses the old name
- a supported rule gained an option that the repository is already relying on or should now align with

Usually **not** actionable on their own:

- "implemented autofix"
- "improve diagnostics"
- "add help messages"
- "documentation"
- "metadata"
- generic bug fixes with no config consequence

Those should usually be `review-only` unless repository inspection shows a real config change is warranted.

## Report structure

When the user asks for analysis, use this structure:

### Oxlint changelog impact

**Mode:** `analysis-only` or `implementation-requested`

#### Actionable changes

| Type | Rule | Target files | Why it matters | Suggested action |
|---|---|---|---|---|

Include only `add`, `migrate`, `replace`, `remove`, or `adjust` items here.

#### Review-only items

| Entry | Reason |
|---|---|

#### Ignored items

| Entry | Reason |
|---|---|

#### Investigate further

| Entry | Open question |
|---|---|

If a section is empty, say `None`.

Keep the report specific. Name exact rules and files instead of saying "some TypeScript rules" or "probably the config".

## Implementation mode

If the user explicitly asks to apply changes:

1. Still produce the impact analysis first, even if briefly.
2. Apply only the items that are clearly actionable.
3. For rule add/migrate work, invoke the `add-rule` skill before editing rule config when that skill is available.
4. Keep unsupported plugins out of scope.
5. Do not silently implement `review-only` or `investigate` items as if they were approved facts.

If the user says "apply the obvious ones" or similar, use only the clearly actionable entries. If ambiguity remains, say which entries were intentionally left out and why.

## Practical judgment rules

- Do not suggest enabling an entire new plugin because one release note mentions it.
- Do not treat changelog noise as mandatory work.
- Do not recommend config edits for rules the repository does not use unless the changelog clearly adds a valuable supported rule and the user wants adoption work.
- If a rule is already handled by oxlint in the repository, a bug fix is usually `review-only`, not a config change.
- If a rule is currently enforced only in ESLint-side config and Oxlint just gained support, that is a strong candidate for `migrate`.

## Worked examples

**Example 1**

Input entry:

`linter/jest: Implemented jest version settings in config file.`

Output classification:

- `ignored`
- reason: `jest` plugin is not supported by the current repository

**Example 2**

Input entry:

`linter/typescript: Implement explicit-member-accessibility`

Likely result after repository inspection:

- `migrate`
- target files: `configs/oxlintrc.jsonc`, `configs/typescript.js`
- reason: the repository already enforces `@typescript-eslint/explicit-member-accessibility`, so Oxlint support may let us move enforcement

**Example 3**

Input entry:

`linter: Backfill rule version metadata`

Output classification:

- `review-only`
- reason: metadata change, no direct config edit implied

**Example 4**

Input entry:

`linter/no-empty-pattern: Add allowObjectPatternsAsParameters option`

Output classification:

- `adjust` only if repository inspection shows the current rule config should adopt the new option
- otherwise `review-only`

## When not to use this skill

Do not use this skill for:

- generic rule addition with no changelog input
- direct "enable this rule" requests
- writing tests for rules

Use `add-rule` for direct rule adoption / migration work, and `testing` for test authoring.
