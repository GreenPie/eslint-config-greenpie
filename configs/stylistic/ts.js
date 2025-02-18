import tsEslint from 'typescript-eslint';
import stylisticTsPlugin from '@stylistic/eslint-plugin-ts';

// https://eslint.style/packages/ts
export default tsEslint.config({
  plugins: {
    '@stylistic/ts': stylisticTsPlugin
  },

  /**
   * {@link https://github.com/eslint-stylistic/eslint-stylistic/releases}
   */
  rules: {
    // TODO: do we need this disabling?

    // Disable original JavaScript rules

    '@stylistic/js/block-spacing': 'off',
    '@stylistic/js/brace-style': 'off',
    '@stylistic/js/comma-dangle': 'off',
    '@stylistic/js/comma-spacing': 'off',
    '@stylistic/js/function-call-spacing': 'off',
    '@stylistic/js/indent': 'off',
    '@stylistic/js/key-spacing': 'off',
    '@stylistic/js/keyword-spacing': 'off',
    '@stylistic/js/lines-around-comment': 'off',
    '@stylistic/js/lines-between-class-members': 'off',
    '@stylistic/js/no-extra-parens': 'off',
    '@stylistic/js/no-extra-semi': 'off',
    '@stylistic/js/object-curly-spacing': 'off',
    '@stylistic/js/padding-line-between-statements': 'off',
    '@stylistic/js/quote-props': 'off',
    '@stylistic/js/quotes': 'off',
    '@stylistic/js/semi': 'off',
    '@stylistic/js/semi-spacing': 'off',
    '@stylistic/js/space-before-blocks': 'off',
    '@stylistic/js/space-before-function-paren': 'off',
    '@stylistic/js/space-infix-ops': 'off',

    // TypeScript rules

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

    '@stylistic/ts/no-extra-parens': ['error', 'all', {
      nestedBinaryExpressions: false
    }],

    '@stylistic/ts/no-extra-semi': 'error',

    '@stylistic/ts/object-curly-newline': ['error', {

      /**
       * TSTypeLiteral
       * TSInterfaceBody
       */

      TSInterfaceBody: {
        multiline: true,
        minProperties: 1
      }
    }],

    '@stylistic/ts/object-curly-spacing': ['error', 'always'],
    '@stylistic/ts/object-property-newline': 'error',

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

    '@stylistic/ts/quote-props': ['error', 'as-needed'],
    '@stylistic/ts/quotes': ['error', 'single'],
    '@stylistic/ts/semi': 'error',
    '@stylistic/ts/semi-spacing': 'error',
    '@stylistic/ts/space-before-blocks': 'error',

    '@stylistic/ts/space-before-function-paren': ['error', {
      named: 'never'
    }],

    '@stylistic/ts/space-infix-ops': 'error',

    // TODO: This rule should be more granular
    '@stylistic/ts/type-annotation-spacing': 'off'
  }
});
