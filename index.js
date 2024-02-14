import baseConfig from './configs/base.js';
import stylisticJsConfig from './configs/stylistic/js.js';
import stylisticPlusConfig from './configs/stylistic/plus.js';
import stylisticTsConfig from './configs/stylistic/ts.js';
import typeScriptConfig from './configs/typescript.js';

export default [
  ...baseConfig,
  ...stylisticJsConfig,
  ...typeScriptConfig,
  ...stylisticTsConfig,
  ...stylisticPlusConfig
];
