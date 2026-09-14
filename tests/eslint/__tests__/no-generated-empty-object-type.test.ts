import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';
import { configs } from '../../../index.js';

const RULE_ID = '@typescript-eslint/no-generated-empty-object-type';

const eslint = new ESLint({
  overrideConfigFile: true,
  overrideConfig: [
    ...configs.ts,
    {
      files: ['**/*.ts'],
      languageOptions: {
        parserOptions: {
          projectService: {
            allowDefaultProject: ['generated-empty-object-type.ts']
          }
        }
      }
    }
  ]
});

async function getViolations(code: string) {
  const [result] = await eslint.lintText(code, {
    filePath: 'generated-empty-object-type.ts'
  });

  return result.messages.filter(message => message.ruleId === RULE_ID);
}

describe(RULE_ID, () => {
  it('reports only type operations that resolve to an empty object', async () => {
    const violations = await getViolations(`
      type Input = null | {
        name: string;
        value: number;
      };

      type Expected = Omit<NonNullable<Input>, 'name'>;
      type Unexpected = Omit<Input, 'name'>;
    `);

    expect(violations).toHaveLength(1);
  }, 10_000);
});
