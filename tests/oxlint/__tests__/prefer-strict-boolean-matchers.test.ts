import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vitest/prefer-strict-boolean-matchers';

describe(RULE_ID, () => {
  it('valid: strict boolean matchers used', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'prefer-strict-boolean-matchers.valid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: non-strict boolean matchers used', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'prefer-strict-boolean-matchers.invalid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
