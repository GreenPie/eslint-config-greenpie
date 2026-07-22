import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vitest/padding-around-test-blocks';

describe(RULE_ID, () => {
  it('valid: test blocks are visually separated', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'padding-around-test-blocks.valid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: test block touches the previous statement', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'padding-around-test-blocks.invalid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
