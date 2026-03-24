import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'unicorn/custom-error-definition';

describe(RULE_ID, () => {
  it('valid: properly defined custom error class', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'custom-error-definition.valid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: improperly defined custom error class', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'custom-error-definition.invalid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
