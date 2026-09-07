import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';
import vueConfig from '../../../configs/vue.js';

const RULE_ID = 'vue/no-shadow-native-events';

const eslint = new ESLint({
  overrideConfigFile: null,
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

async function getViolations(eventName: string) {
  const code = `<script setup lang="ts">
const emit = defineEmits<{ ${eventName}: [] }>();
emit('${eventName}');
</script>
`;

  const [result] = await eslint.lintText(code, { filePath: 'test.vue' });

  return result.messages.filter(message => message.ruleId === RULE_ID);
}

describe(RULE_ID, () => {
  it('allows intent-specific component events', async () => {
    const violations = await getViolations('close');

    expect(violations).toHaveLength(0);
  });

  it('rejects events that shadow native web events', async () => {
    const violations = await getViolations('click');

    expect(violations.length).toBeGreaterThan(0);
  });
});
