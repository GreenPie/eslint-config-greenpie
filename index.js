const baseRules = require.resolve('./rules/base');
const stylisticJsRules = require.resolve('./rules/stylistic/js');
const typescriptRules = require.resolve('./rules/typescript');

module.exports = {
  extends: [
    baseRules,
    stylisticJsRules,
    typescriptRules
  ]
};
