import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'eslint/no-unmodified-loop-condition';

describe(RULE_ID, () => {
  it('valid: every conditional branch reference can change', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-unmodified-loop-condition.valid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: a stale conditional branch reference reports a violation', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-unmodified-loop-condition.invalid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
