import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'eslint/prefer-regex-literals';

describe(RULE_ID, () => {
  it('valid: regex literal stays clean', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'prefer-regex-literals.valid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: RegExp constructor reports a violation', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'prefer-regex-literals.invalid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
