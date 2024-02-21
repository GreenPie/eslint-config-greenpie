import baseConfig from './configs/base.js';
import typeScriptConfig from './configs/typescript.js';
import vueConfig from './configs/vue.js';
import stylisticJsConfig from './configs/stylistic/js.js';
import stylisticPlusConfig from './configs/stylistic/plus.js';
import stylisticTsConfig from './configs/stylistic/ts.js';

export default {
  configs: {
    base: baseConfig,
    stylisticJs: stylisticJsConfig,
    stylisticPlus: stylisticPlusConfig,
    stylisticTs: stylisticTsConfig,
    typeScript: typeScriptConfig,
    vue: vueConfig,

    default: [
      ...baseConfig,
      ...stylisticJsConfig,
      ...typeScriptConfig,
      ...stylisticTsConfig,
      ...stylisticPlusConfig
    ]
  }
}
