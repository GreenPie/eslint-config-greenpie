import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vue/return-in-emits-validator';

describe(RULE_ID, () => {
  it('valid: emits validator returns a boolean', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'return-in-emits-validator.valid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: emits validator omits a return value', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'return-in-emits-validator.invalid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
