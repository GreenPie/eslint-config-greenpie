# Pretty tough ESLint config

[![npm version](https://badge.fury.io/js/eslint-config-greenpie.svg)](http://badge.fury.io/js/eslint-config-greenpie)

This package provides ESLint's shared config that designed to be strict as hell.

## Usage

Install configurations

* `npm install typescript-eslint eslint-config-greenpie --save-dev`

And then add to local `eslint.config.js` following configuration

```js
import tsEslint from 'typescript-eslint';
import eslintGreenPie from 'eslint-config-greenpie';

export default tsEslint.config(
  ...eslintGreenPie.configs.default,
  ...eslintGreenPie.configs.vue
);
```

or see more [examples](#examples) below.

### Configs

| Config    | Description                    |
|-----------|--------------------------------|
| `default` | Includes `js` and `ts` configs |
| `js`      | Includes JavaScript rules      |
| `ts`      | Includes TypeScript rules      |
| `vue`     | Includes rules for Vue.js      |

### Examples

#### JS/TS rules

```js
import eslintGreenPie from 'eslint-config-greenpie';

export default [
  ...eslintGreenPie.configs.js
];
```

#### JS + Vue

```js
import eslintGreenPie from 'eslint-config-greenpie';

export default [
  ...eslintGreenPie.configs.js,
  ...eslintGreenPie.configs.vue
];
```

#### JS + TS + Vue

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
* [Stylistic JavaScript rules](https://eslint.style/packages/js)
* [Stylistic TypeScript rules](https://eslint.style/packages/ts)
* [Stylistic additional rules](https://eslint.style/packages/plus)
* [Vue rules](https://eslint.vuejs.org/rules/)
