import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';
import vueConfig from '../../../configs/vue.js';

const RULE_ID = 'vue/no-define-model-default';

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
  it('allows models without defaults and required named models', async () => {
    const violations = await getViolations(`
<script setup lang="ts">
const modelValue = defineModel<string>();
const count = defineModel<number>('count', { required: true });
</script>
`);

    expect(violations).toHaveLength(0);
  });

  it('rejects defaults on default and named models', async () => {
    const violations = await getViolations(`
<script setup lang="ts">
const modelValue = defineModel<string>({ default: '' });
const items = defineModel<string[]>('items', { default: () => [] });
</script>
`);

    expect(violations).toHaveLength(2);
  });
});
