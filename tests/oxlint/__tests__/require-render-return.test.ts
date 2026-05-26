import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vue/require-render-return';

describe(RULE_ID, () => {
  it('valid: render returns a value', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'require-render-return.valid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: render does not return anything', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'require-render-return.invalid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
