# Pretty tough linting configs

This is a repository for ESLint/oxlint shared configurations.

## General information

- Shared configs separated by following categories:
  - `base`: Base ESLint rules.
  - `typescript`: Typescript-specific rules.
  - `stylistic`: Stylistic rules for JS/TS.
  - `vue`: Vue-specific rules.
  - `oxlint`: oxlint rules

- oxlint is main linter. If rules exist in other configs and oxlint, oxlint rules will be used and original rules will be disabled.

## oxlint config files

- `configs/oxlintrc.jsonc` — the **shared** config that is published and extended by end users of this package. It must only contain rules that apply universally. Never add project-local overrides here (e.g. ignoring rules for test helpers or fixture files).
- `.oxlintrc.json` — the **local** config used only when linting this repository itself. It extends `configs/oxlintrc.jsonc` and is the correct place for any project-specific overrides: ignoring fixture files, relaxing rules for test files, etc.

## Available commands

- `npm run lint:eslint` - Run ESLint to check code quality and style
- `npm run lint:oxlint` - Run oxlint (faster linter) to check code
- `npm run lint` - Run both linters sequentially (oxlint first, then ESLint)
- `npm run test` - Run unit tests with Vitest
- `npm run update:all` - Update all dependencies using taze with interactive mode

For linting, prefer using `npm run lint` which runs both linters in proper order.

## After each change

After making any changes to the codebase, always run both commands to verify correctness:

```sh
npm run lint
npm run test
```

Both must pass before considering the change complete.
