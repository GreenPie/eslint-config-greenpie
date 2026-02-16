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

## Available commands

- `npm run lint:eslint` - Run ESLint to check code quality and style
- `npm run lint:oxlint` - Run oxlint (faster linter) to check code
- `npm run lint` - Run both linters sequentially (oxlint first, then ESLint)
- `npm run update:all` - Update all dependencies using taze with interactive mode

For linting, prefer using `npm run lint` which runs both linters in proper order.
