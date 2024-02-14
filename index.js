import tsEslint from 'typescript-eslint';
import baseConfig from './configs/base.js';
import stylisticJs from './configs/stylistic/js.js';
import stylisticPlus from './configs/stylistic/plus.js';
import stylisticTs from './configs/stylistic/ts.js';
import typeScript from './configs/typescript.js';
import vue from './configs/vue.js';

const jsConfig = tsEslint.config({
  files: [
    '**/*.{js,mjs,cjs}'
  ],

  extends: [
    ...baseConfig,
    ...stylisticJs,
    ...stylisticPlus
  ]
});

const tsConfig = tsEslint.config({
  files: [
    '**/*.{ts,mts,cts}'
  ],

  extends: [
    ...baseConfig,
    ...stylisticJs,
    ...stylisticPlus,
    ...stylisticTs,
    ...typeScript
  ]
});

const vueConfig = tsEslint.config({
  files: [
    '**/*.vue'
  ],

  extends: [
    ...baseConfig,
    ...stylisticJs,
    ...stylisticPlus,
    ...stylisticTs,
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
    vue: vueConfig,
  }
};
