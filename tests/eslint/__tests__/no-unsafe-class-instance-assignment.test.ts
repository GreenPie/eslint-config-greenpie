import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';
import { configs } from '../../../index.js';

const RULE_ID = '@typescript-eslint/no-unsafe-class-instance-assignment';

const eslint = new ESLint({
  overrideConfigFile: true,
  overrideConfig: configs.ts
});

async function getViolations(value: string) {
  const code = `class Point {
  public x = 1;
}

export const point: Point = ${value};
`;

  const [result] = await eslint.lintText(code, {
    filePath: import.meta.filename
  });

  return result.messages.filter(message => message.ruleId === RULE_ID);
}

describe(RULE_ID, () => {
  // The first lint call loads the TypeScript project while other suites run in parallel.
  it('allows an instance created by the class constructor', async () => {
    const violations = await getViolations('new Point()');

    expect(violations).toHaveLength(0);
  }, 15_000);

  it('rejects a plain object assigned to a class instance type', async () => {
    const violations = await getViolations('{ x: 1 }');

    expect(violations).toHaveLength(1);
  });
});
