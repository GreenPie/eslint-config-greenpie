import tsEslint from 'typescript-eslint';
import baseConfig from './configs/base.js';
import stylistic from './configs/stylistic.js';
import typeScript from './configs/typescript.js';
import vue from './configs/vue.js';

const jsConfig = tsEslint.config({
  files: [
    '**/*.{js,mjs,cjs}'
  ],

  extends: [
    ...baseConfig,
    ...stylistic
  ]
});

const tsConfig = tsEslint.config({
  files: [
    '**/*.{ts,mts,cts}'
  ],

  extends: [
    ...baseConfig,
    ...stylistic,
    ...typeScript
  ]
});

const vueConfig = tsEslint.config({
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

const defaultConfig = tsEslint.config(
  ...jsConfig,
  ...tsConfig
);

export default {
  configs: {
    default: defaultConfig,
    js: jsConfig,
    ts: tsConfig,
    vue: vueConfig
  }
};
