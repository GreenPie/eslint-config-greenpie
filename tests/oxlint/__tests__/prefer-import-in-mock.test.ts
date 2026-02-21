import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'vitest/prefer-import-in-mock';

describe(RULE_ID, () => {
  it('valid: dynamic import in vi.mock()', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'prefer-import-in-mock.valid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: string literal in vi.mock()', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'prefer-import-in-mock.invalid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
