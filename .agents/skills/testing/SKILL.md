---
name: testing
description: Writing tests for eslint-config-greenpie rules. Use when adding tests for new ESLint or oxlint rules, creating fixture files, or verifying rule behavior. Triggers on "write a test", "add test for rule", "test this rule", "create fixture".
---

# Testing Rules in eslint-config-greenpie

Two test categories, each with its own helper and location.

## ESLint rules — `tests/eslint/__tests__/`

Use the programmatic ESLint API with the **real config file** (do not copy/paste config inline).

```typescript
import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';
import stylisticConfig from '../../../configs/stylistic.js'; // import real config

const RULE_ID = '@stylistic/some-rule';

const eslint = new ESLint({
  overrideConfigFile: null, // null = disable auto-discovery
  overrideConfig: stylisticConfig
});

async function getViolations(code: string) {
  const [result] = await eslint.lintText(code, { filePath: 'test.ts' });
  return result.messages.filter(msg => msg.ruleId === RULE_ID);
}

describe(RULE_ID, () => {
  it('valid: ...', async () => {
    expect(await getViolations('...')).toHaveLength(0);
  });

  it('invalid: ...', async () => {
    expect((await getViolations('...')).length).toBeGreaterThan(0);
  });
});
```

## oxlint rules — `tests/oxlint/__tests__/`

Use `runOxlint` + `violationsOf` from `tests/oxlint/helper.ts`. Fixture files live **next to the test** (not in a `fixtures/` subfolder).

```typescript
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'plugin/rule-name'; // e.g. 'vitest/consistent-each-for'

describe(RULE_ID, () => {
  it('valid', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'rule-name.valid.ts')
    ]);
    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'rule-name.invalid.ts')
    ]);
    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
```

### Fixture filenames

Must match the ignore patterns in `configs/oxlintrc.jsonc` so `npm run lint` skips them:

- `rule-name.valid.ts`
- `rule-name.invalid.ts`

### `violationsOf` mapping

`violationsOf(diagnostics, ruleId)` converts:
- `plugin/rule-name` → `eslint-plugin-plugin(rule-name)`
- `rule-name` → `eslint(rule-name)`

## After writing tests

```sh
npm run lint
npm run test
```

Both must pass.
