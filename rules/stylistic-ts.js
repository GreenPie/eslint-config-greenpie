// https://eslint.style/packages/ts
module.exports = {
  plugins: [
    '@stylistic/ts'
  ],

  /**
   * {@link https://github.com/eslint-stylistic/eslint-stylistic/releases}
   */
  rules: {
    '@stylistic/ts/block-spacing': 'error',
    '@stylistic/ts/brace-style': 'error',
    '@stylistic/ts/comma-dangle': 'error',
    '@stylistic/ts/comma-spacing': 'error',
    // Alias of `func-call-spacing`.
    '@stylistic/ts/function-call-spacing': 'error',
    '@stylistic/ts/indent': ['error', 2],
    '@stylistic/ts/key-spacing': 'error',
    '@stylistic/ts/keyword-spacing': 'error',

    '@stylistic/ts/lines-around-comment': ['error', {
      allowBlockStart: true
    }],

    // TODO: Lack of configuration. Can it be replaced by `padding-line-between-statements`?
    '@stylistic/ts/lines-between-class-members': 'off',
    '@stylistic/ts/member-delimiter-style': 'error',
    '@stylistic/ts/no-extra-parens': 'error',
    '@stylistic/ts/no-extra-semi': 'error',
    '@stylistic/ts/object-curly-spacing': ['error', 'always'],

    '@stylistic/ts/padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: ['const', 'let', 'block-like', 'directive'],
      next: '*'
    }, {
      blankLine: 'always',
      prev: '*',
      next: ['const', 'let', 'return', 'block-like']
    }, {
      blankLine: 'never',
      prev: ['singleline-const', 'singleline-let'],
      next: ['singleline-const', 'singleline-let']
    }, {
      blankLine: 'never',
      prev: 'directive',
      next: 'directive'
    }, {
      blankLine: 'never',
      prev: 'case',
      next: ['case', 'default']
    }, {
      blankLine: 'always',
      prev: 'block-like',
      next: ['case', 'default']
    }],

    '@stylistic/ts/quotes': ['error', 'single'],
    '@stylistic/ts/semi': 'error',
    '@stylistic/ts/space-before-blocks': 'error',

    '@stylistic/ts/space-before-function-paren': ['error', {
      named: 'never'
    }],

    '@stylistic/ts/space-infix-ops': 'error',

    // TODO: This rule should be more granular
    '@stylistic/ts/type-annotation-spacing': 'off'
  }
};
