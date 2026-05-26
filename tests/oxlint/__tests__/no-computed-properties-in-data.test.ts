import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vue/no-computed-properties-in-data';

describe(RULE_ID, () => {
  it('valid: data does not depend on computed properties', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-computed-properties-in-data.valid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: data reads from a computed property', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-computed-properties-in-data.invalid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
