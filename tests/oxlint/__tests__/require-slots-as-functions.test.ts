import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vue/require-slots-as-functions';

describe(RULE_ID, () => {
  it('valid: slots are invoked as functions', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'require-slots-as-functions.valid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: slots are read as plain values', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'require-slots-as-functions.invalid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
