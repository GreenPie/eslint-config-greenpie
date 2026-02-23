import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'typescript/prefer-string-starts-ends-with';

describe(RULE_ID, () => {
  it('valid', async () => {
    const diagnostics = await runOxlint(
      [path.join(import.meta.dirname, 'prefer-string-starts-ends-with.valid.ts')],
      { typeAware: true }
    );

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid', async () => {
    const diagnostics = await runOxlint(
      [path.join(import.meta.dirname, 'prefer-string-starts-ends-with.invalid.ts')],
      { typeAware: true }
    );

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
