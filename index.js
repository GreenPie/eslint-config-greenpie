module.exports = {
  extends: [
    'eslint-config-greenpie/rules/es6',
    'eslint-config-greenpie/rules/node',
    'eslint-config-greenpie/rules/base',
    'eslint-config-greenpie/rules/variables',
    'eslint-config-greenpie/rules/best-practices',
    'eslint-config-greenpie/rules/style'
  ].map(require.resolve)
};
