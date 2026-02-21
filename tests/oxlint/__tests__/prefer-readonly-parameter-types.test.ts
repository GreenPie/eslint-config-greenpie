import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'typescript/prefer-readonly-parameter-types';

/*
 * Rule is intentionally disabled — it produces false positives with common patterns.
 * See: https://github.com/typescript-eslint/typescript-eslint/issues/2079
 */
describe(RULE_ID, () => {
  it('valid', async () => {
    const diagnostics = await runOxlint(
      [path.join(import.meta.dirname, 'prefer-readonly-parameter-types.valid.ts')],
      { typeAware: true }
    );

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid (rule is off — no violations expected)', async () => {
    const diagnostics = await runOxlint(
      [path.join(import.meta.dirname, 'prefer-readonly-parameter-types.invalid.ts')],
      { typeAware: true }
    );

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });
});
