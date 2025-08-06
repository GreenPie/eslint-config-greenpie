# Pretty tough ESLint config

[![npm version](https://badge.fury.io/js/eslint-config-greenpie.svg)](http://badge.fury.io/js/eslint-config-greenpie)

This package provides ESLint's shared config that designed to be strict as hell.

## Usage

Install required packages:

- `npm install eslint-config-greenpie oxlint typescript-eslint --save-dev`

Then add the following code to your local `.oxlintrc.json` file:

```jsonc
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",

  "extends": [
    "./node_modules/eslint-config-greenpie/configs/oxlintrc.jsonc"
  ]
}
```

And the following code to `eslint.config.js` file:

```js
import tsEslint from 'typescript-eslint';
import eslintGreenPie from 'eslint-config-greenpie';

export default tsEslint.config(
  ...eslintGreenPie.configs.default,
  ...eslintGreenPie.configs.vue
);
```

or see more [examples](#examples) below.

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
import eslintGreenPie from 'eslint-config-greenpie';

export default [
  ...eslintGreenPie.configs.js
];
```

### JS + Vue

```js
import eslintGreenPie from 'eslint-config-greenpie';

export default [
  ...eslintGreenPie.configs.js,
  ...eslintGreenPie.configs.vue
];
```

### JS + TS + Vue

You will probably need to [configure another parser](https://github.com/vuejs/vue-eslint-parser#parseroptionsparser) for the `<script>` tag.

```js
import eslintGreenPie from 'eslint-config-greenpie';

export default [
  ...eslintGreenPie.configs.default,
  ...eslintGreenPie.configs.vue
];
```

## Links

* [Registry](https://www.npmjs.com/package/eslint-config-greenpie)
* [Basic ESLint rules](https://eslint.org/docs/rules/)
* [TypeScript rules](https://typescript-eslint.io/rules/)
* [Stylistic rules](https://eslint.style/rules)
* [Vue rules](https://eslint.vuejs.org/rules/)
* [Oxlint documentation](https://oxc.rs/docs/guide/usage/linter.html)
