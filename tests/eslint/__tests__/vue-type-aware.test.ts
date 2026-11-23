import { ESLint } from 'eslint';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { configs } from '../../../index.js';

const eslint = new ESLint({
  overrideConfigFile: true,
  overrideConfig: configs.vue
});

describe('type-aware linting in Vue', () => {
  it('reports unsafe assignments and incorrect promise usage in a Vue script', async () => {
    const fixture = path.join(import.meta.dirname, '../../oxlint/__tests__/vue-type-aware.invalid.vue');
    const [result] = await eslint.lintFiles([fixture]);
    const ruleIds = result.messages.map(message => message.ruleId);

    expect(ruleIds).toContain('@typescript-eslint/no-unsafe-class-instance-assignment');
    expect(ruleIds).toContain('@typescript-eslint/no-floating-promises');
    expect(ruleIds).toContain('@typescript-eslint/await-thenable');
  }, 15_000);
});
