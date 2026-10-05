import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';
import { configs } from '../../../index.js';

const RULE_ID = '@typescript-eslint/no-unsafe-enum-assignment';

const eslint = new ESLint({
  overrideConfigFile: true,
  overrideConfig: configs.ts
});

async function getViolations(code: string) {
  const [result] = await eslint.lintText(code, { filePath: import.meta.filename });

  return result.messages.filter(message => message.ruleId === RULE_ID);
}

// Type-aware linting needs time to start the project service during full test runs.
describe(RULE_ID, { timeout: 10_000 }, () => {
  it('allows assigning an enum member', async () => {
    const violations = await getViolations(`
enum Fruit { Apple }
const fruit: Fruit = Fruit.Apple;
void fruit;
`);

    expect(violations).toHaveLength(0);
  });

  it('rejects assigning a numeric literal to an enum', async () => {
    const violations = await getViolations(`
enum Fruit { Apple }
const fruit: Fruit = 0;
void fruit;
`);

    expect(violations).toHaveLength(1);
  });
});
