import { defineConfig } from 'eslint/config';
import baseConfig from './configs/base.js';
import stylistic from './configs/stylistic.js';
import typeScript from './configs/typescript.js';
import vue from './configs/vue.js';

const jsConfig = defineConfig({
  files: [
    '**/*.{js,mjs,cjs}'
  ],

  extends: [
    ...baseConfig,
    ...stylistic
  ]
});

const tsConfig = defineConfig({
  files: [
    '**/*.{ts,mts,cts}'
  ],

  extends: [
    ...baseConfig,
    ...stylistic,
    ...typeScript
  ]
});

const vueConfig = defineConfig({
  files: [
    '**/*.vue'
  ],

  extends: [
    ...baseConfig,
    ...stylistic,
    ...typeScript,
    ...vue
  ]
});

const defaultConfig = defineConfig(
  ...jsConfig,
  ...tsConfig
);

export const configs = {
  default: defaultConfig,
  js: jsConfig,
  ts: tsConfig,
  vue: vueConfig
};
