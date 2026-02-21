import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';
import stylisticConfig from '../../../configs/stylistic.js';

const RULE_ID = '@stylistic/padding-line-between-statements';

const eslint = new ESLint({
  overrideConfigFile: null,
  overrideConfig: stylisticConfig
});

async function getViolations(code: string) {
  const [result] = await eslint.lintText(code, { filePath: 'test.js' });

  return result.messages
    .filter(msg => msg.ruleId === RULE_ID)
    .map(msg => msg.message);
}

describe(RULE_ID, () => {
  describe('valid', () => {
    it('blank line after const before expression statement', async () => {
      const violations = await getViolations(
        'const foo = 1;\n\nfoo;\n'
      );

      expect(violations).toHaveLength(0);
    });

    it('blank line before return', async () => {
      const violations = await getViolations(
        'function fn() {\nconst foo = 1;\n\nreturn foo;\n}\n'
      );

      expect(violations).toHaveLength(0);
    });

    it('no blank line between consecutive singleline consts', async () => {
      const violations = await getViolations(
        'const foo = 1;\nconst bar = 2;\n'
      );

      expect(violations).toHaveLength(0);
    });

    it('no blank line between directives', async () => {
      const violations = await getViolations(
        '\'use strict\';\n\'use client\';\n\nconst foo = 1;\n'
      );

      expect(violations).toHaveLength(0);
    });

    it('no blank line between plain case labels', async () => {
      const violations = await getViolations(
        'switch (x) {\ncase 1:\ncase 2:\ndefault:\nbreak;\n}\n'
      );

      expect(violations).toHaveLength(0);
    });

    it('blank line after block-like case before next case', async () => {
      const violations = await getViolations(
        'switch (x) {\ncase 1: {\nbreak;\n}\n\ncase 2:\nbreak;\n}\n'
      );

      expect(violations).toHaveLength(0);
    });

    /**
     * One-line cases that refer to same block shouldn't require blank lines between them
     *
     * ```ts
     * switch (x) {
     *   case 1:
     *   case 2: {
     *     break;
     *   }
     * }
     * ```
     */
    it('no blank line between one-line cases that refer to same block', async () => {
      const violations = await getViolations(
        'switch (x) {\ncase 1:\ncase 2: {\nbreak;\n}\n}\n'
      );

      expect(violations).toHaveLength(0);
    });
  });

  describe('invalid', () => {
    it('missing blank line after const', async () => {
      const violations = await getViolations(
        'const foo = 1;\nfoo;\n'
      );

      expect(violations.length).toBeGreaterThan(0);
    });

    it('missing blank line before return', async () => {
      const violations = await getViolations(
        'function fn() {\nconst foo = 1;\nreturn foo;\n}\n'
      );

      expect(violations.length).toBeGreaterThan(0);
    });

    it('extra blank line between singleline consts', async () => {
      const violations = await getViolations(
        'const foo = 1;\n\nconst bar = 2;\n'
      );

      expect(violations.length).toBeGreaterThan(0);
    });

    it('missing blank line after block-like case before next case', async () => {
      const violations = await getViolations(
        'switch (x) {\ncase 1: {\nbreak;\n}\ncase 2:\nbreak;\n}\n'
      );

      expect(violations.length).toBeGreaterThan(0);
    });

    /**
     * One-line cases that refer to same block shouldn't not have blank lines between them
     *
     * ```ts
     * switch (x) {
     *   case 1:
     *
     *   case 2: {
     *     break;
     *   }
     * }
     * ```
     */
    it('extra blank line between one-line cases that refer to same block', async () => {
      const violations = await getViolations(
        'switch (x) {\ncase 1:\n\ncase 2: {\nbreak;\n}\n}\n'
      );

      expect(violations.length).toBeGreaterThan(0);
    });
  });
});
