import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vue/no-expose-after-await';

describe(RULE_ID, () => {
  it('valid: expose happens before await', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-expose-after-await.valid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: expose happens after await', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-expose-after-await.invalid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
