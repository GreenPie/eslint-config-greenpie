import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'no-console';

describe(RULE_ID, () => {
  it('valid: oxlint-disable-next-line still suppresses diagnostics', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'respect-eslint-disable-directives.valid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: eslint-disable-next-line no longer suppresses diagnostics', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'respect-eslint-disable-directives.invalid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
