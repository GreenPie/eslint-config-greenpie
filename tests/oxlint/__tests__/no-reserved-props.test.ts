import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vue/no-reserved-props';

describe(RULE_ID, () => {
  it('valid', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-reserved-props.valid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-reserved-props.invalid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
