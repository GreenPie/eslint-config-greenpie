import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vue/no-deprecated-vue-config-keycodes';

describe(RULE_ID, () => {
  it('valid: other Vue.config properties are allowed', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-deprecated-vue-config-keycodes.valid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: Vue.config.keyCodes is reported', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-deprecated-vue-config-keycodes.invalid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
