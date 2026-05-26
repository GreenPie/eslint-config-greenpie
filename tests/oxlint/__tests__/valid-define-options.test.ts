import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vue/valid-define-options';

describe(RULE_ID, () => {
  it('valid: defineOptions receives a single object argument', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'valid-define-options.valid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: defineOptions uses a forbidden component option', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'valid-define-options.invalid.vue')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
