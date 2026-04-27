import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vitest/prefer-todo';

describe(RULE_ID, () => {
  it('valid: explicit todo stays allowed for this rule', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'prefer-todo.valid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: placeholder tests should use todo', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'prefer-todo.invalid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
