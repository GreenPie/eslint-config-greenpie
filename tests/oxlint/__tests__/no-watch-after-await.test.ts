import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vue/no-watch-after-await';

describe(RULE_ID, () => {
  it('valid: watch is registered before await', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-watch-after-await.valid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: watch is registered after await', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-watch-after-await.invalid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
