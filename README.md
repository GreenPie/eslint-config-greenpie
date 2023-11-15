# Pretty tough ESLint config

[![npm version](https://badge.fury.io/js/eslint-config-greenpie.svg)](http://badge.fury.io/js/eslint-config-greenpie)

This package provides GreenPie's `.eslintrc` as an extensible shared config.

## Usage

Install configurations

* `npm install eslint-config-greenpie --save-dev`

And then extend your local eslint config by this one

```json
{
  "extends": ["eslint-config-greenpie"]
}
```

### Rulesets

Currently, here are four rulesets to extend

| Extension                             | Description                                    |
|---------------------------------------|------------------------------------------------|
| `eslint-config-greenpie`              | Includes base, formatting and typescript rules |
| `eslint-config-greenpie/base`         | Common ESLint rules                            |
| `eslint-config-greenpie/stylistic/js` | Stylistic JS rules                             |
| `eslint-config-greenpie/typescript`   | TypeScript-related rules                       |
| `eslint-config-greenpie/vue`          | Rules for Vue projects                         |
| `eslint-config-greenpie/jest`         | Rules for test files using Jest                |

### Base rules

For using base rules, it requires `eslint` plugin installed

* `npm install eslint --save-dev`

### Formatting rules (JavaScript)

For using formatting rules for JS, it requires `@stylistic/eslint-plugin-js` plugin installed

* `npm install @stylistic/eslint-plugin-js --save-dev`

### TypeScript

For TypeScript related rules, it requires a plugin and parser installed

* `npm install @typescript-eslint/eslint-plugin --save-dev`
* `npm install @typescript-eslint/parser --save-dev`

### Vue

For Vue-related rules, it requires a plugin installed

* `npm install eslint-plugin-vue --save-dev`

Also, if you're planning to use TypeScript alongside Vue, you will probably need to [configure another parser](https://github.com/vuejs/vue-eslint-parser#parseroptionsparser) for the `<script>` tag.

### Jest (or a similar tool like Vitest)

Additional configuration for Jest requires `eslint-plugin-jest` plugin

* `npm install eslint-plugin-jest --save-dev`

### Links

* [Registry](https://www.npmjs.com/package/eslint-config-greenpie)
* [Basic ESLint rules](https://eslint.org/docs/rules/)
* [TypeScript rules](https://typescript-eslint.io/rules/)
* [Vue rules](https://eslint.vuejs.org)
* [Jest rules](https://github.com/jest-community/eslint-plugin-jest#rules)
