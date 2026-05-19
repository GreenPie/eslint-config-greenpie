import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vitest/padding-around-after-all-blocks';

describe(RULE_ID, () => {
  it('valid: afterAll block is visually separated', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'padding-around-after-all-blocks.valid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: afterAll block touches the next statement', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'padding-around-after-all-blocks.invalid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
