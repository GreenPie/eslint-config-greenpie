import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'no-underscore-dangle';

describe(RULE_ID, () => {
  it('valid: plain destructuring names are allowed', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-underscore-dangle-options.valid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: array and object destructuring still reject dangling underscores', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-underscore-dangle-options.invalid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
