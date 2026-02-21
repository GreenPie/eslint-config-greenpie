# Pretty tough linting configs

[![npm version](https://badge.fury.io/js/eslint-config-greenpie.svg)](http://badge.fury.io/js/eslint-config-greenpie)

This package provides ESLint's shared config that designed to be strict as hell.

## Usage

Install the base package with required dependencies:

```bash
npm install eslint-config-greenpie eslint --save-dev
```

Then install additional dependencies depending on your use case:

**For oxlint users:**

```bash
npm install oxlint --save-dev
```

**For oxlint with type-aware rules:**

```bash
npm install oxlint-tsgolint --save-dev
```

**For ESLint users:**

```bash
npm install @stylistic/eslint-plugin --save-dev
```

**For TypeScript projects:**

```bash
npm install typescript-eslint --save-dev
```

**For Vue.js projects:**

```bash
npm install eslint-plugin-vue --save-dev
```

### Oxlint configuration

If using oxlint, create a `.oxlintrc.json` file in the root of your project with the following content:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",

  "extends": [
    "./node_modules/eslint-config-greenpie/configs/oxlintrc.jsonc"
  ]
}
```

### Oxlint CLI

Run oxlint with the following command:

```bash
oxlint --report-unused-disable-directives-severity error
```

> **Note:** The `--report-unused-disable-directives-severity error` flag helps prevent cluttering your project with unnecessary disable directives.

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

## Config (oxlint)

Oxlint has one unified configuration for all supported languages (`.js`, `.ts`, `.vue`). You can granularly configure it in your local `.oxlintrc.json` file.

Related ESLint rules are disabled by default if supported by oxlint.

## Configs (ESLint)

| Config    | Description                    |
|-----------|--------------------------------|
| `default` | Includes `js` and `ts` configs |
| `js`      | Includes JavaScript rules      |
| `ts`      | Includes TypeScript rules      |
| `vue`     | Includes rules for Vue.js      |

## Config (oxlint)

Oxlint has one unified configuration for all supported languages (`.js`, `.ts`, `.vue`). You can granually configure it in your local `.oxlintrc.json` file.

Related ESLint rules are disabled by default if supported by oxlint.

## Type-aware linting (oxlint)

For type-aware linting capabilities (like `no-floating-promises`, `no-unsafe-*` rules, etc.), you need to install an additional package and use the `--type-aware` flag:

```bash
npx oxlint --type-aware
```

## Configuration examples

### Oxlint

```json
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

### Allow namespace imports for specific packages

The `import/no-namespace` rule disallows `import * as` syntax. If you need to use namespace imports for a specific package (e.g. `valibot`), you can override the rule in your local `.oxlintrc.json`:

```json
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

* [Registry](https://www.npmjs.com/package/eslint-config-greenpie)
* [Basic ESLint rules](https://eslint.org/docs/rules/)
* [TypeScript rules](https://typescript-eslint.io/rules/)
* [Stylistic rules](https://eslint.style/rules)
* [Vue rules](https://eslint.vuejs.org/rules/)
* [Oxlint documentation](https://oxc.rs/docs/guide/usage/linter.html)

## Development

### Running tests

```bash
npm run test
```

Tests use [Vitest](https://vitest.dev/) and the [ESLint programmatic API](https://eslint.org/docs/developer-guide/nodejs-api) to lint code snippets directly against the configs defined in this repository.
