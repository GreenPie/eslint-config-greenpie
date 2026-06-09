import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vue/require-direct-export';

describe(RULE_ID, () => {
  it('valid', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'require-direct-export.valid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'require-direct-export.invalid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
