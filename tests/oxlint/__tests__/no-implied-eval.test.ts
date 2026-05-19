import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'eslint/no-implied-eval';

describe(RULE_ID, () => {
  it('valid: callback form is allowed', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-implied-eval.valid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: string callbacks are rejected', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-implied-eval.invalid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
