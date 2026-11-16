import { ESLint } from 'eslint';
import tsEslint from 'typescript-eslint';
import { describe, expect, it } from 'vitest';
import stylisticConfig from '../../../configs/stylistic.js';

const RULE_ID = '@stylistic/list-style';

const eslint = new ESLint({
  overrideConfigFile: true,
  overrideConfig: [
    ...stylisticConfig,
    {
      files: ['**/*.ts'],
      languageOptions: {
        parser: tsEslint.parser
      }
    }
  ]
});

async function getViolations(code: string) {
  const [result] = await eslint.lintText(code, { filePath: 'format.ts' });

  expect(result.fatalErrorCount).toBe(0);

  return result.messages.filter(message => message.ruleId === RULE_ID);
}

describe(RULE_ID, () => {
  it.each([
    ['compact arrays', 'const items = [first, second];'],
    ['wrapped arrays', 'const items = [\n  first,\n  second\n];'],
    ['single-property objects', 'const item = { first: 1 };'],
    ['wrapped objects', 'const item = {\n  first: 1,\n  second: 2\n};'],
    ['named imports', 'import { first, second } from "example";'],
    ['object destructuring', 'const { first, second } = item;'],
    ['wrapped exports', 'const first = 1;\nexport {\n  first\n};'],
    ['wrapped interfaces', 'interface Item {\n  first: number;\n}'],
    ['wrapped enums', 'enum Item {\n  First\n}'],
    ['single-member type literals', 'type Item = { first: number };'],
    ['wrapped type literals', 'type Item = {\n  first: number;\n  second: number;\n};'],
    ['compact arguments', 'fn(first, second);'],
    ['wrapped arguments', 'fn(\n  first,\n  second\n);'],
    ['empty structures', 'const items = [];\nconst item = {};\nfn();']
  ])('allows %s', async (_name, code) => {
    const violations = await getViolations(code);

    expect(violations).toHaveLength(0);
  });

  it.each([
    ['spaces inside arrays', 'const items = [ first, second ];'],
    ['missing object spaces', 'const item = {first: 1};'],
    ['inline object properties', 'const item = { first: 1, second: 2 };'],
    ['inline exports', 'const first = 1;\nexport { first };'],
    ['inline interfaces', 'interface Item { first: number; }'],
    ['inline enums', 'enum Item { First }'],
    ['inline type members', 'type Item = { first: number; second: number };'],
    ['mixed array line breaks', 'const items = [\n  first, second\n];'],
    ['mixed argument line breaks', 'fn(\n  first, second\n);'],
    ['spaces inside call parentheses', 'fn( first );'],
    ['spaces in empty arrays', 'const items = [ ];'],
    ['spaces in empty objects', 'const item = { };'],
    ['spaces in empty calls', 'fn( );'],
    ['wrapped empty arrays', 'const items = [\n];'],
    ['wrapped empty objects', 'const item = {\n};'],
    ['wrapped empty calls', 'fn(\n);']
  ])('rejects %s', async (_name, code) => {
    const violations = await getViolations(code);

    expect(violations.length).toBeGreaterThan(0);
  });

  it('fixes object line breaks without conflicting with other formatting rules', async () => {
    const fixingEslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: stylisticConfig,
      fix: true
    });

    const [result] = await fixingEslint.lintText('const item = { first: 1, second: 2 };\n');

    expect(result.messages).toHaveLength(0);
    expect(result.output).toBe('const item = {\n  first: 1,\n  second: 2\n};\n');
  });
});
