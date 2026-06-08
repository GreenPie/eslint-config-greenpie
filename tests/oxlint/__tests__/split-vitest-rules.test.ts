import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runOxlint, violationsOf } from '../helper.js';

const VALID_FIXTURE = path.join(import.meta.dirname, 'split-vitest-rules.valid.ts');
const BASE_SCOPE_FIXTURE = path.join(import.meta.dirname, 'no-test-prefixes.invalid.ts');
const NON_TEST_SCOPE_FIXTURE = path.join(import.meta.dirname, '../vitest-scope.fixture.ts');

const cases = [
  {
    ruleId: 'vitest/consistent-test-it',
    invalidFixture: 'consistent-test-it.invalid.ts'
  },
  {
    ruleId: 'vitest/no-standalone-expect',
    invalidFixture: 'no-standalone-expect.invalid.ts'
  },
  {
    ruleId: 'vitest/no-test-prefixes',
    invalidFixture: 'no-test-prefixes.invalid.ts'
  },
  {
    ruleId: 'vitest/no-test-return-statement',
    invalidFixture: 'no-test-return-statement.invalid.ts'
  },
  {
    ruleId: 'vitest/prefer-called-with',
    invalidFixture: 'prefer-called-with.invalid.ts'
  },
  {
    ruleId: 'vitest/prefer-comparison-matcher',
    invalidFixture: 'prefer-comparison-matcher.invalid.ts'
  },
  {
    ruleId: 'vitest/prefer-each',
    invalidFixture: 'prefer-each.invalid.ts'
  },
  {
    ruleId: 'vitest/prefer-equality-matcher',
    invalidFixture: 'prefer-equality-matcher.invalid.ts'
  },
  {
    ruleId: 'vitest/prefer-expect-resolves',
    invalidFixture: 'prefer-expect-resolves.invalid.ts'
  },
  {
    ruleId: 'vitest/prefer-hooks-in-order',
    invalidFixture: 'prefer-hooks-in-order.invalid.ts'
  },
  {
    ruleId: 'vitest/prefer-hooks-on-top',
    invalidFixture: 'prefer-hooks-on-top.invalid.ts'
  },
  {
    ruleId: 'vitest/prefer-lowercase-title',
    invalidFixture: 'prefer-lowercase-title.invalid.ts'
  },
  {
    ruleId: 'vitest/prefer-mock-promise-shorthand',
    invalidFixture: 'prefer-mock-promise-shorthand.invalid.ts'
  },
  {
    ruleId: 'vitest/prefer-mock-return-shorthand',
    invalidFixture: 'prefer-mock-return-shorthand.invalid.ts'
  },
  {
    ruleId: 'vitest/prefer-snapshot-hint',
    invalidFixture: 'prefer-snapshot-hint.invalid.ts'
  },
  {
    ruleId: 'vitest/prefer-spy-on',
    invalidFixture: 'prefer-spy-on.invalid.ts'
  },
  {
    ruleId: 'vitest/prefer-strict-equal',
    invalidFixture: 'prefer-strict-equal.invalid.ts'
  },
  {
    ruleId: 'vitest/prefer-to-be',
    invalidFixture: 'prefer-to-be.invalid.ts'
  },
  {
    ruleId: 'vitest/prefer-to-have-been-called-times',
    invalidFixture: 'prefer-to-have-been-called-times.invalid.ts'
  },
  {
    ruleId: 'vitest/prefer-to-have-length',
    invalidFixture: 'prefer-to-have-length.invalid.ts'
  },
  {
    ruleId: 'vitest/require-hook',
    invalidFixture: 'require-hook.invalid.ts'
  },
  {
    ruleId: 'vitest/require-to-throw-message',
    invalidFixture: 'require-to-throw-message.invalid.ts'
  },
  {
    ruleId: 'vitest/valid-describe-callback',
    invalidFixture: 'valid-describe-callback.invalid.ts'
  },
  {
    ruleId: 'vitest/valid-expect-in-promise',
    invalidFixture: 'valid-expect-in-promise.invalid.ts'
  }
] as const;

describe('split vitest config scope', () => {
  it('base config reports Vitest diagnostics for matching test fixtures', async () => {
    const diagnostics = await runOxlint([BASE_SCOPE_FIXTURE]);

    expect(violationsOf(diagnostics, 'vitest/no-test-prefixes').length).toBeGreaterThan(0);
  });

  it('base config keeps the internal Vitest addon scoped away from non-test files', async () => {
    const diagnostics = await runOxlint([NON_TEST_SCOPE_FIXTURE]);

    expect(violationsOf(diagnostics, 'vitest/no-test-prefixes')).toHaveLength(0);
  });
});

describe.each(cases)('$ruleId', ({ ruleId, invalidFixture }) => {
  it('valid: shared fixture stays clean', async () => {
    const diagnostics = await runOxlint([VALID_FIXTURE]);

    expect(violationsOf(diagnostics, ruleId)).toHaveLength(0);
  });

  it('invalid: dedicated fixture reports a violation', async () => {
    const diagnostics = await runOxlint([
      path.join(import.meta.dirname, invalidFixture)
    ]);

    expect(violationsOf(diagnostics, ruleId).length).toBeGreaterThan(0);
  });
});
