import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';
import stylisticConfig from '../../../configs/stylistic.js';
import vueConfig from '../../../configs/vue.js';

const STYLISTIC_RULE_ID = '@stylistic/max-len';
const VUE_RULE_ID = 'vue/max-len';

const stylisticEslint = new ESLint({
  overrideConfigFile: null,
  overrideConfig: stylisticConfig
});

const vueEslint = new ESLint({
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

async function getViolations({
  code,
  eslint,
  filePath,
  ruleId
}: {
  code: string;
  eslint: ESLint;
  filePath: string;
  ruleId: string;
}) {
  const [result] = await eslint.lintText(code, { filePath });

  return result.messages.filter(message => message.ruleId === ruleId);
}

describe('max-len', () => {
  describe.each([
    {
      eslint: stylisticEslint,
      filePath: 'test.js',
      ruleId: STYLISTIC_RULE_ID,
      wrap: (code: string) => code
    },
    {
      eslint: vueEslint,
      filePath: 'test.vue',
      ruleId: VUE_RULE_ID,
      wrap: (code: string) => `<script setup lang="ts">\n${code}\n</script>\n`
    }
  ])('$ruleId', ({ eslint, filePath, ruleId, wrap }) => {
    it('allows long string literals', async () => {
      const code = wrap(`const message = '${'a'.repeat(121)}';`);

      const violations = await getViolations({
        code,
        eslint,
        filePath,
        ruleId
      });

      expect(violations).toHaveLength(0);
    });

    it('rejects other long code lines', async () => {
      const code = wrap(`const ${'a'.repeat(121)} = 1;`);

      const violations = await getViolations({
        code,
        eslint,
        filePath,
        ruleId
      });

      expect(violations).toHaveLength(1);
    });
  });
});
