import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'unicorn/filename-case';

describe(RULE_ID, () => {
  it('valid: kebab-case filename', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'valid-filename.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('invalid: PascalCase filename', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'InvalidFilename.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID).length).toBeGreaterThan(0);
  });
});
