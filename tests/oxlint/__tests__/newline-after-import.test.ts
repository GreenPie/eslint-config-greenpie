import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'import/newline-after-import';

describe(RULE_ID, () => {
  it('valid: import block is separated from code', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'newline-after-import.valid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: import block directly touches code', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'newline-after-import.invalid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
