import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vue/valid-next-tick';

describe(RULE_ID, () => {
  it('valid: nextTick receives a callback', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'valid-next-tick.valid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: nextTick is called without callback or await', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'valid-next-tick.invalid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
