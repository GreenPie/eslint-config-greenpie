import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'unicorn/max-nested-calls';

describe(RULE_ID, () => {
  it('allows direct calls with named intermediate values', async () => {
    const validFixture = path.join(import.meta.dirname, 'max-nested-calls.valid.ts');
    const diagnostics = await runOxlint([validFixture]);
    const violations = violationsOf(diagnostics, RULE_ID);

    expect(violations).toHaveLength(0);
  });

  it('reports deeply nested calls', async () => {
    const invalidFixture = path.join(import.meta.dirname, 'max-nested-calls.invalid.ts');
    const diagnostics = await runOxlint([invalidFixture]);
    const violations = violationsOf(diagnostics, RULE_ID);

    expect(violations.length).toBeGreaterThan(0);
  });
});
