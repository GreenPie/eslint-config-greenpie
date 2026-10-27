---
"eslint-config-greenpie": minor
---

Update Oxlint to 1.90.0, oxlint-tsgolint to 7.0.2005, eslint-plugin-vue to 10.12.0, and typescript-eslint to 8.72.1. Enable vue/no-content-outside-block and vue/no-define-model-default, and move no-unsafe-enum-assignment from ESLint to Oxlint.

Update Node.js to 26.12.1 and pnpm to 12.15.0. Replace Execa with tinyexec in the Oxlint test helper.

Keep vue/no-props-shadow explicitly disabled because it overlaps with an existing Oxlint rule and adds stricter checks for props-derived bindings.
