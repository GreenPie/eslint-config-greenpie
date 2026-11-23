# Pretty tough linting configs

[![npm version](https://badge.fury.io/js/eslint-config-greenpie.svg)](http://badge.fury.io/js/eslint-config-greenpie)

This package provides ESLint's shared config that designed to be strict as hell.

## Usage

Install the package with the dependencies for your setup:

**For oxlint users:**

```bash
vp add --save-dev eslint-config-greenpie oxlint oxlint-tsgolint
```

ESLint and its plugins are optional peer dependencies. You do not need them when using only the Oxlint config.

**For ESLint users:**

```bash
vp add --save-dev eslint-config-greenpie eslint @stylistic/eslint-plugin typescript-eslint eslint-plugin-vue oxlint oxlint-tsgolint
```

The package entry point imports all ESLint configs, so all four ESLint packages are required even if you only use `configs.js`. Run Oxlint alongside ESLint: rules covered by Oxlint are disabled in the ESLint configs.

### Oxlint configuration

If using oxlint, create a `.oxlintrc.jsonc` file in the root of your project with the following content:

```jsonc
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",

  "extends": [
    "./node_modules/eslint-config-greenpie/configs/oxlintrc.jsonc"
  ]
}
```

Vitest rules are included in the shared Oxlint config through the package's internal `configs/oxlintrc.vitest.jsonc` addon, so the consumer setup stays at a single `extends` entry.

> **Note:** The internal Vitest addon currently applies to `**/*.test.ts` and `**/__tests__/**/*.ts`.

### Oxlint CLI

Run oxlint with the following command:

```bash
oxlint
```

If you want Oxlint output in an agent-friendly format, use:

```bash
oxlint --format agent
```

> **Note:** The shared config has `reportUnusedDisableDirectives` enabled by default and does not honor `eslint-disable*` comments. Use `oxlint-disable*` comments for Oxlint suppressions. If you are still migrating from ESLint comments, you can override this in your local `.oxlintrc.jsonc`:
>
> ```jsonc
> {
>   "options": {
>     "reportUnusedDisableDirectives": "off",
>     "respectEslintDisableDirectives": true
>   }
> }
> ```

### ESLint configuration

```js
import { defineConfig } from 'eslint/config';
import { configs } from 'eslint-config-greenpie';

export default defineConfig(
  ...configs.default,
  ...configs.vue
);
```

See more [examples](#configuration-examples) below.

## Configs (ESLint)

| Config    | Description                    |
|-----------|--------------------------------|
| `default` | Includes `js` and `ts` configs |
| `js`      | Includes JavaScript rules      |
| `ts`      | Includes TypeScript rules      |
| `vue`     | Includes rules for Vue.js      |

## Type-aware linting

The shared Oxlint config enables `options.typeAware` by default. Rules such as `no-floating-promises`, `await-thenable`, and `no-unsafe-assignment` use TypeScript's type information. Install `oxlint-tsgolint` alongside `oxlint` and keep your TypeScript files in a `tsconfig.json` project Oxlint can discover.

Use ESLint's `configs.vue` alongside Oxlint to get these checks in `.vue` scripts. Oxlint runs syntax-based rules on those scripts, while ESLint runs the type-aware rules through typescript-eslint.

See [technical debt](DEBT.md#vue-type-aware-linting) for the plan to move these rules to Oxlint.

## Configuration examples

### Oxlint

```jsonc
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",

  "extends": [
    "./node_modules/eslint-config-greenpie/configs/oxlintrc.jsonc"
  ],

  "rules": {
    "eslint/no-magic-numbers": "off",
  },

  "overrides": [{
    "files": ["src/**/*.{ts,vue}"],

    "env": {
      "browser": true
    }
  }, {
    "files": ["vite.config.mts"],

    "env": {
      "node": true
    }
  }]
}
```

### JS/TS rules

```js
import { configs } from 'eslint-config-greenpie';

export default [
  ...configs.js
];
```

### JS + Vue

```js
import { configs } from 'eslint-config-greenpie';

export default [
  ...configs.js,
  ...configs.vue
];
```

### JS + TS + Vue

You will probably need to [configure another parser](https://github.com/vuejs/vue-eslint-parser#parseroptionsparser) for the `<script>` tag.

```js
import { configs } from 'eslint-config-greenpie';

export default [
  ...configs.default,
  ...configs.vue
];
```

## Tips

### Allow short identifiers for id-length

The `eslint/id-length` rule enforces minimum identifier length (default: 2). If your project has legitimate short identifiers, add only those in your local `.oxlintrc.jsonc`.

```jsonc
{
  "extends": [
    "./node_modules/eslint-config-greenpie/configs/oxlintrc.jsonc"
  ],

  "rules": {
    "eslint/id-length": ["error", {
      "max": 40,

      "exceptions": [
        "t", // translation function, e.g. from vue-i18n
        "v"  // valibot schema builder, e.g. `v.string()`, `v.object({...})`, etc.
      ]
    }]
  }
}
```

### Allow namespace imports for specific packages

The `import/no-namespace` rule disallows `import * as` syntax. If you need to use namespace imports for a specific package (e.g. `valibot`), you can override the rule in your local `.oxlintrc.jsonc`:

```jsonc
{
  "extends": [
    "./node_modules/eslint-config-greenpie/configs/oxlintrc.jsonc"
  ],

  "rules": {
    "import/no-namespace": ["error", {
      "ignore": ["valibot"]
    }]
  }
}
```

## Links

- [Registry](https://www.npmjs.com/package/eslint-config-greenpie)
- [Basic ESLint rules](https://eslint.org/docs/rules/)
- [TypeScript rules](https://typescript-eslint.io/rules/)
- [Stylistic rules](https://eslint.style/rules)
- [Vue rules](https://eslint.vuejs.org/rules/)
- [Oxlint documentation](https://oxc.rs/docs/guide/usage/linter.html)

## Development

### Running tests

```bash
vp run test
```

Tests use [Vitest](https://vitest.dev/) and the [ESLint programmatic API](https://eslint.org/docs/developer-guide/nodejs-api) to lint code snippets directly against the configs defined in this repository.

To rerun only the tests that failed in the last run, use:

```bash
vp run test:agent --last-failed
```

This command reads the results cache. If no tests failed, it exits with code 1 and reports `No failed tests found`. Run the full suite with `vp run test:agent` before finishing a change.
