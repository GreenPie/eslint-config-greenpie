import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'typescript/no-unsafe-class-instance-assignment';

describe(RULE_ID, () => {
  it('allows an instance created by the class constructor', async () => {
    const fixture = path.join(import.meta.dirname, 'no-unsafe-class-instance-assignment.valid.ts');
    const diagnostics = await runOxlint([fixture]);
    const violations = violationsOf(diagnostics, RULE_ID);

    expect(violations).toHaveLength(0);
  });

  it('rejects a plain object assigned to a class instance type', async () => {
    const fixture = path.join(import.meta.dirname, 'no-unsafe-class-instance-assignment.invalid.ts');
    const diagnostics = await runOxlint([fixture]);
    const violations = violationsOf(diagnostics, RULE_ID);

    expect(violations).toHaveLength(1);
  });
});
