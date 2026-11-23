# Technical debt

## Vue type-aware linting

The Vue config uses typescript-eslint for the shared type-aware rules because Oxlint 1.95 does not run them on `.vue` files. [ESLint config](configs/typescript.js), [Oxlint RFC #29142](https://github.com/oxc-project/oxc/discussions/29142)

Remove the ESLint fallback once the minimum supported Oxlint version can run these rules in `.vue` files. First, verify that the shared Oxlint config reports the three expected errors in the [Vue regression fixture](tests/oxlint/__tests__/vue-type-aware.invalid.vue). Then move the [regression test](tests/eslint/__tests__/vue-type-aware.test.ts) to Oxlint.
