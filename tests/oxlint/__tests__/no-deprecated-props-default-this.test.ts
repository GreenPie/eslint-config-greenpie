import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vue/no-deprecated-props-default-this';

describe(RULE_ID, () => {
  it('valid: prop default does not use this', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-deprecated-props-default-this.valid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: prop default reads from this', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-deprecated-props-default-this.invalid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
