import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vitest/consistent-each-for';

describe(RULE_ID, () => {
  it('valid: .each usage', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'consistent-each-for.valid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: .for usage instead of .each', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'consistent-each-for.invalid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
