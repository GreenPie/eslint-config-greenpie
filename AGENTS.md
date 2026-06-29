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

- `configs/oxlintrc.jsonc` — the **shared base** config that is published and extended by end users of this package. It must only contain rules that apply universally. It includes `options.typeAware: true` to enable type-aware linting for all users and it is the public entry point consumers should extend.
- `configs/oxlintrc.vitest.jsonc` — the **internal shared addon** for Vitest rules. It is kept as a separate published file so the Vitest policy stays isolated, but the base config pulls it in via `extends` to keep consumer setup at one `extends` entry.
- `.oxlintrc.jsonc` — the **local** config used only when linting this repository itself. It extends `configs/oxlintrc.jsonc` and is the correct place for project-specific overrides: ignoring fixture files, relaxing rules for test files, etc.

## After each change

After making any changes to the codebase, always run both commands to verify correctness:

```sh
pnpm run test:agent
pnpm run lint:oxlint:agent
pnpm run lint:eslint
```

Both must pass before considering the change complete.
