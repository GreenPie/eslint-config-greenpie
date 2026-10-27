import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';
import vueConfig from '../../../configs/vue.js';

const RULE_ID = 'vue/no-content-outside-block';

const eslint = new ESLint({
  overrideConfigFile: true,
  overrideConfig: [
    ...vueConfig,
    {
      languageOptions: {
        parserOptions: {
          projectService: false
        }
      }
    }
  ]
});

async function getViolations(code: string) {
  const [result] = await eslint.lintText(code, { filePath: 'test.vue' });

  expect(result.fatalErrorCount).toBe(0);

  return result.messages.filter(message => message.ruleId === RULE_ID);
}

describe(RULE_ID, () => {
  it('allows comments and custom blocks between component blocks', async () => {
    const violations = await getViolations(`
<template><div /></template>
<!-- Component documentation -->
<docs>This custom block is allowed.</docs>
<script setup lang="ts"></script>
`);

    expect(violations).toHaveLength(0);
  });

  it('rejects text outside component blocks', async () => {
    const violations = await getViolations(`
<template><div /></template>
This text will not be rendered.
<script setup lang="ts"></script>
`);

    expect(violations).toHaveLength(1);
  });
});
