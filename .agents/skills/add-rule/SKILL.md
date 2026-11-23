---
name: add-rule
description: Workflow for adding new linting rules or migrating existing ESLint/typescript-eslint rules to oxlint in eslint-config-greenpie. Triggers on "add rule", "enable rule", "migrate rule to oxlint", "add eslint rule", "add oxlint rule", "disable in favor of oxlint".
---

# Adding / Migrating Linting Rules

Oxlint is the primary linter. When moving a rule from ESLint to Oxlint, keep ESLint active for file types where Oxlint misses violations.

Two scenarios:
- **A** — New oxlint-only rule (no ESLint equivalent)
- **B** — Migrating an active ESLint rule to oxlint *(most common)*

## Namespace mapping

| oxlintrc prefix | ESLint config file | ESLint rule prefix |
|---|---|---|
| `eslint/rule-name` | `configs/base.js` | `rule-name` |
| `typescript/rule-name` | `configs/typescript.js` | `@typescript-eslint/rule-name` |
| `stylistic/rule-name` | `configs/stylistic.js` | `@stylistic/rule-name` |
| `vitest/rule-name` | `configs/oxlintrc.vitest.jsonc` | `vitest/rule-name` |
| `vue/rule-name` | `configs/vue.js` | `vue/rule-name` |

## New rules and disabled entries

When implementing rule changes, add every new rule from the repository's supported linters and plugins to its config. Use a bare `off` value when the rule will stay disabled or the decision to enable it is still pending.

- Place each entry in its normal category and plugin section, in alphabetical order among sibling rules. Use the "Disabled rules in favor of oxlint" section only when Oxlint handles the rule.
- For every disabled rule, add a short comment that explains why it is disabled. A shared section comment is enough when it explains that rule's reason, such as "Disabled rules in favor of oxlint". Otherwise, put the reason next to the rule. Name any conflicting or overlapping rule when it is part of the reason.
- Preserve existing explicit opt-outs. Rules from unsupported linters or plugins stay out of scope.

## Scenario A: New oxlint rule (no ESLint equivalent)

Add to the relevant Oxlint config file:

- `configs/oxlintrc.jsonc` for the general namespaces
- `configs/oxlintrc.vitest.jsonc` for `vitest/*` rules inside the test-file override

Keep entries alphabetized among sibling rules.

```sh
vp run lint:oxlint:agent
vp run lint:eslint
vp run test:agent
```

## Scenario B: Migrating ESLint rule → oxlint

### Step 1 — Check coverage and update ESLint

With the intended rule settings, check that the minimum supported Oxlint version reports a known violation for each affected file type. For a type-aware TypeScript rule, check a `.ts` file and a `.vue` file with `<script setup lang="ts">`.

If Oxlint covers every affected file type, move the ESLint entry to the `Off in favor of oxlint` or `Disabled rules in favor of oxlint` section in alphabetical order. Use a bare `'off'`.

If Oxlint covers the affected TypeScript files but misses a type-aware rule in Vue, use the Vue override in [configs/typescript.js](../../../configs/typescript.js).

- For `error` with default options, replace the standalone ESLint entry with its rule ID in `oxlintTypeAwareRules`. The list sets the shared `'off'` and enables the rule in Vue.
- For custom severity or options, use a shared `'off'` and keep the original settings in the Vue override.

Verify that `configs.vue` reports the violation. [Vue fallback tracking](../../../DEBT.md#vue-type-aware-linting)

For other coverage gaps, scope the ESLint `'off'` to the file types Oxlint covers.

```js
// configs/base.js — before (somewhere in active rules):
eqeqeq: ['error', 'always', { null: 'ignore' }],

// after (in "Off in favor of oxlint" section, alphabetically):
eqeqeq: 'off',
```

### Extension rules (typescript-eslint pattern)

Some `@typescript-eslint/` rules are **extension rules** — they extend a base ESLint rule of the same name. In this case `configs/typescript.js` contains a suppressor line that disables the base rule in favor of the TS version:

```js
// configs/typescript.js — extension rule pattern:
'no-empty-function': 'off',
'@typescript-eslint/no-empty-function': 'error',
```

Use these steps when Oxlint covers both rules for all affected file types.

1. Move the base rule to the "Off in favor of oxlint" section in `configs/base.js` and set it to `'off'`.
2. Remove the base rule's `'off'` entry from `configs/typescript.js`.
3. Move the TypeScript rule to the "Disabled rules in favor of oxlint" section in `configs/typescript.js` and set it to `'off'`.

```js
// configs/base.js — after:
'no-empty-function': 'off',

// configs/typescript.js — after:
'@typescript-eslint/no-empty-function': 'off',
```

For partial coverage, keep the base rule suppressed wherever its ESLint extension stays active.

### Step 2 — Add to oxlintrc.jsonc

Add the namespaced rule ID to `configs/oxlintrc.jsonc`. The minimum supported Oxlint version must accept the rule ID and options.

- Correct **category section** (see below) and **plugin subsection**
- **Alphabetical order** among sibling rules of the same plugin
- Migrate any configuration options (check [oxlint docs](https://oxc.rs/docs/guide/usage/linter/rules.html) — option names may differ)

```jsonc
// Migrated eslint/eqeqeq with options:
"eslint/eqeqeq": ["error", "always", { "null": "ignore" }],
```

## Base oxlintrc.jsonc category sections

Rules in `configs/oxlintrc.jsonc` are grouped into comment-delimited sections. Place new rules in the matching category+plugin block:

```
/** Correctness rules */   // ESLint / JSDoc / Oxc / Promise / TypeScript / Unicorn / Vitest / Vue
/** Perf rules */          // ESLint / Oxc / Unicorn
/** Restriction rules */   // ESLint / Import / JSDoc / Oxc / Promise / TypeScript / Unicorn / Vue
/** Suspicious rules */    // ESLint / Import / Oxc / Promise / TypeScript / Unicorn / Vue
/** Pedantic rules */      // ESLint / ...
/** Style rules */         // ESLint / Import / Promise / TypeScript / Unicorn / Vitest / Vue
/** Nursery rules */       // ESLint / Import / Oxc / Promise / TypeScript
```

Check the rule's category in the [oxlint rules list](https://oxc.rs/docs/guide/usage/linter/rules.html).

For `vitest/*`, update `configs/oxlintrc.vitest.jsonc` instead and keep the rule list alphabetized inside the existing test-file override.

## After every change

```sh
vp run lint:oxlint:agent
vp run lint:eslint
vp run test:agent
```

All must pass.
