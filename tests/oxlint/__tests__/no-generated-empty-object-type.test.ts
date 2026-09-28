import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const RULE_ID = 'typescript/no-generated-empty-object-type';

describe(RULE_ID, () => {
  it('allows a type operation that keeps a property', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-generated-empty-object-type.valid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(0);
  });

  it('reports a type operation that resolves to an empty object', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, 'no-generated-empty-object-type.invalid.ts')
    ]);

    expect(violationsOf(diagnostics, RULE_ID)).toHaveLength(1);
  });
});
