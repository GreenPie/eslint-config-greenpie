const baseRules = require.resolve('./rules/base');
const typescriptRules = require.resolve('./rules/typescript');

module.exports = {
  extends: [
    baseRules,
    typescriptRules
  ]
};
