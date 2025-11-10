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

## Commit message instructions

When writing commit messages, follow these guidelines:

- Commit message should be in English.
- Understand the purpose and impact of the edits to summarize them effectively.
- Use conventional commit format.
- Begin the commit message with a single short (no more than 50 characters) line summarizing the change, followed by a blank line and then a more thorough description in list format with fun emoji per each item that represents the change.
- All changes in linting configs must be mentioned in the commit message, even if they are minor, one-by-one. Show what was added, removed, modified or replaced by oxlint-related rules.
- Put emoji on the beginning of the text following the format: `-{one space}{emoji}{one space}{text}`.
- In case packages were updated, show it in the following format: `- 📦 {package name}: {from version} -> {to version}`.
- Use backticks (`) to wrap package names, file names, or code snippets for better readability.

## Pull request instructions

- Use English for pull request titles and descriptions.
- Create a concise and clear pull request title summarizing the overall changes.
- Write a detailed pull request description that explains the purpose of the changes, the problem being solved or feature being added, and any relevant context.
