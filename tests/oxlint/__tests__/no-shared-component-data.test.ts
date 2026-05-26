import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vue/no-shared-component-data';

describe(RULE_ID, () => {
  it('valid: component data is returned from a function', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-shared-component-data.valid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: component data is declared as a shared object', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-shared-component-data.invalid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
