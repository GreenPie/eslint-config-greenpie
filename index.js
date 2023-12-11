const baseRules = require.resolve('./rules/base');
const stylisticJsRules = require.resolve('./rules/stylistic-js');
const typescriptRules = require.resolve('./rules/typescript');
const stylisticTsRules = require.resolve('./rules/stylistic-ts');
const stylisticPlusRules = require.resolve('./rules/stylistic-plus');

module.exports = {
  extends: [
    baseRules,
    stylisticJsRules,
    typescriptRules,
    stylisticTsRules,
    stylisticPlusRules
  ]
};
