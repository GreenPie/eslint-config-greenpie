---
name: add-rule
description: Workflow for adding new linting rules or migrating existing ESLint/typescript-eslint rules to oxlint in eslint-config-greenpie. Triggers on "add rule", "enable rule", "migrate rule to oxlint", "add eslint rule", "add oxlint rule", "disable in favor of oxlint".
---

# Adding / Migrating Linting Rules

oxlint is the primary linter. When a rule exists in both oxlint and ESLint, **oxlint wins** — the ESLint counterpart must be disabled.

Two scenarios:
- **A** — New oxlint-only rule (no ESLint equivalent)
- **B** — Migrating an active ESLint rule to oxlint *(most common)*

## Namespace mapping

| oxlintrc prefix | ESLint config file | ESLint rule prefix |
|---|---|---|
| `eslint/rule-name` | `configs/base.js` | `rule-name` |
| `typescript/rule-name` | `configs/typescript.js` | `@typescript-eslint/rule-name` |
| `stylistic/rule-name` | `configs/stylistic.js` | `@stylistic/rule-name` |
| `vue/rule-name` | `configs/vue.js` | `vue/rule-name` |

## Scenario A: New oxlint rule (no ESLint equivalent)

Add to `configs/oxlintrc.jsonc` in the correct **category section** and **plugin subsection**, alphabetically among sibling rules.

```sh
npm run lint && npm run test
```

## Scenario B: Migrating ESLint rule → oxlint

### Step 1 — Disable in ESLint config

Find the rule in the appropriate ESLint config file (see mapping above).

Move it to the `Off in favor of oxlint` / `Disabled rules in favor of oxlint` section (**alphabetical order**), set value to `'off'`. Drop any options — the disabled entry is always a bare `'off'`.

```js
// configs/base.js — before (somewhere in active rules):
eqeqeq: ['error', 'always', { null: 'ignore' }],

// after (in "Off in favor of oxlint" section, alphabetically):
eqeqeq: 'off',
```

```js
// configs/typescript.js — before:
'@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

// after (in "Disabled rules in favor of oxlint" section, alphabetically):
'@typescript-eslint/dot-notation': 'off',
```

### Extension rules (typescript-eslint pattern)

Some `@typescript-eslint/` rules are **extension rules** — they extend a base ESLint rule of the same name. In this case `configs/typescript.js` contains a suppressor line that disables the base rule in favor of the TS version:

```js
// configs/typescript.js — extension rule pattern:
'dot-notation': 'off',                            // suppresses base eslint rule
'@typescript-eslint/dot-notation': 'error',       // uses TS-aware version instead
```

When migrating such a rule to oxlint, you must:

1. **Disable the base rule in `configs/base.js`** (move to "Off in favor of oxlint", alphabetically)
2. **Remove the suppressor line** (`'base-rule-name': 'off'`) from `configs/typescript.js` — it served no purpose other than to suppress the base rule in favor of the TS extension rule, which is now also disabled
3. **Add `@typescript-eslint/rule-name: 'off'`** to the "Disabled rules in favor of oxlint" section in `configs/typescript.js` as usual

```js
// configs/base.js — after:
'dot-notation': 'off',  // in "Off in favor of oxlint" section

// configs/typescript.js — after:
'@typescript-eslint/dot-notation': 'off',  // in "Disabled rules in favor of oxlint" section
// The 'dot-notation': 'off' suppressor line is REMOVED entirely
```

### Step 2 — Add to oxlintrc.jsonc

Add to `configs/oxlintrc.jsonc` with the oxlint-namespaced rule ID:
- Correct **category section** (see below) and **plugin subsection**
- **Alphabetical order** among sibling rules of the same plugin
- Migrate any configuration options (check [oxlint docs](https://oxc.rs/docs/guide/usage/linter/rules.html) — option names may differ)

```jsonc
// Migrated eslint/eqeqeq with options:
"eslint/eqeqeq": ["error", "always", { "null": "ignore" }],

// Migrated typescript/dot-notation with options:
"typescript/dot-notation": ["error", { "allowKeywords": true }],
```

## oxlintrc.jsonc category sections

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

## After every change

```sh
npm run lint && npm run test
```

Both must pass.
