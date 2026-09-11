import { ESLint } from 'eslint';
import { defineConfig } from 'eslint/config';
import { array, object, parse, string } from 'valibot';
import { describe, expect, it } from 'vitest';
import { configs } from '../../../index.js';

const configSchema = object({
  languageOptions: object({
    parserOptions: object({
      extraFileExtensions: array(string())
    })
  })
});

const eslint = new ESLint({
  overrideConfigFile: null,
  overrideConfig: defineConfig(
    ...configs.default,
    ...configs.vue
  )
});

async function getExtraFileExtensions(filePath: string) {
  const rawConfig: unknown = await eslint.calculateConfigForFile(filePath);
  const config = parse(configSchema, rawConfig);

  return config.languageOptions.parserOptions.extraFileExtensions;
}

describe('typescript project service', () => {
  it('uses the same extra file extensions for TypeScript and Vue files', async () => {
    const typeScriptExtensions = await getExtraFileExtensions('test.ts');
    const vueExtensions = await getExtraFileExtensions('test.vue');

    expect(typeScriptExtensions).toStrictEqual(['.vue']);
    expect(vueExtensions).toStrictEqual(['.vue']);
  });
});
