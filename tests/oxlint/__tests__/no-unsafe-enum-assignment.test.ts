import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'typescript/no-unsafe-enum-assignment';

describe(RULE_ID, () => {
  it('allows assigning an enum member', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-unsafe-enum-assignment.valid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('rejects assigning a numeric literal to an enum', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-unsafe-enum-assignment.invalid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(1);
  });
});
