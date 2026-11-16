import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';
import stylisticConfig from '../../../configs/stylistic.js';
import vueConfig from '../../../configs/vue.js';

const RULE_ID = 'vue/object-curly-spacing';

const eslint = new ESLint({
  overrideConfigFile: true,
  overrideConfig: [
    ...stylisticConfig,
    ...vueConfig,
    {
      files: ['**/*.vue'],
      languageOptions: {
        parserOptions: {
          projectService: false
        }
      }
    }
  ]
});

async function getViolations(expression: string) {
  const code = `<template>
  <div :class="${expression}" />
</template>

<script setup lang="ts">
  const enabled = true;
</script>
`;

  const [result] = await eslint.lintText(code, { filePath: 'test.vue' });

  expect(result.fatalErrorCount).toBe(0);

  return result.messages.filter(message => message.ruleId === RULE_ID);
}

describe('stylistic 6 compatibility with Vue template rules', () => {
  it('allows spaces around template object properties', async () => {
    const violations = await getViolations('{ active: enabled }');

    expect(violations).toHaveLength(0);
  });

  it('reports missing template object spaces through the Vue extension', async () => {
    const violations = await getViolations('{active: enabled}');

    expect(violations).toHaveLength(2);
  });
});
