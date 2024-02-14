import stylisticJsPlugin from '@stylistic/eslint-plugin-js';
import tsEslint from 'typescript-eslint';

// https://eslint.style/packages/js
export default tsEslint.config({
  plugins: {
    '@stylistic/js': stylisticJsPlugin
  },

  /**
   * {@link https://github.com/eslint-stylistic/eslint-stylistic/releases}
   */
  rules: {
    '@stylistic/js/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/js/array-bracket-spacing': 'error',
    '@stylistic/js/array-element-newline': ['error', 'consistent'],

    '@stylistic/js/arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true
    }],

    '@stylistic/js/arrow-spacing': 'error',
    '@stylistic/js/block-spacing': 'error',
    '@stylistic/js/brace-style': 'error',
    '@stylistic/js/comma-dangle': 'error',
    '@stylistic/js/comma-spacing': 'error',
    '@stylistic/js/comma-style': 'error',
    '@stylistic/js/computed-property-spacing': 'error',
    '@stylistic/js/dot-location': ['error', 'property'],
    '@stylistic/js/eol-last': 'error',
    // Alias: `func-call-spacing`
    '@stylistic/js/function-call-spacing': 'error',
    '@stylistic/js/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/js/function-paren-newline': ['error', 'consistent'],
    '@stylistic/js/generator-star-spacing': 'error',
    '@stylistic/js/implicit-arrow-linebreak': 'error',
    '@stylistic/js/indent': ['error', 2],
    '@stylistic/js/jsx-quotes': 'error',
    '@stylistic/js/key-spacing': 'error',
    '@stylistic/js/keyword-spacing': 'error',
    '@stylistic/js/line-comment-position': 'error',
    '@stylistic/js/linebreak-style': 'error',

    '@stylistic/js/lines-around-comment': ['error', {
      allowBlockStart: true
    }],

    '@stylistic/js/lines-between-class-members': 'error',

    '@stylistic/js/max-len': ['error', 120, {
      ignoreUrls: true
    }],

    '@stylistic/js/max-statements-per-line': 'error',
    '@stylistic/js/multiline-comment-style': 'error',

    // If it requires multilines, so it's probably better to use "if-else" instead
    '@stylistic/js/multiline-ternary': ['error', 'never'],

    '@stylistic/js/new-parens': 'error',
    '@stylistic/js/newline-per-chained-call': 'error',

    '@stylistic/js/no-confusing-arrow': ['error', {
      onlyOneSimpleParam: true
    }],

    '@stylistic/js/no-extra-parens': 'error',
    '@stylistic/js/no-extra-semi': 'error',
    '@stylistic/js/no-floating-decimal': 'error',
    '@stylistic/js/no-mixed-operators': 'error',
    '@stylistic/js/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/js/no-multi-spaces': 'error',

    '@stylistic/js/no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 0
    }],

    '@stylistic/js/no-tabs': 'error',
    '@stylistic/js/no-trailing-spaces': 'error',
    '@stylistic/js/no-whitespace-before-property': 'error',
    '@stylistic/js/nonblock-statement-body-position': 'error',

    '@stylistic/js/object-curly-newline': ['error', {

      /**
       * ObjectExpression
       * ObjectPattern
       * ImportDeclaration
       * ExportDeclaration
       */

      ObjectExpression: {
        consistent: true,
        multiline: true,
        minProperties: 2
      },

      ExportDeclaration: {
        multiline: true,
        minProperties: 1
      }
    }],

    '@stylistic/js/object-curly-spacing': ['error', 'always'],
    '@stylistic/js/object-property-newline': 'error',
    '@stylistic/js/one-var-declaration-per-line': 'error',
    '@stylistic/js/operator-linebreak': 'error',
    '@stylistic/js/padded-blocks': ['error', 'never'],
    '@stylistic/js/padding-line-between-statements': 'error',
    '@stylistic/js/quote-props': ['error', 'as-needed'],
    '@stylistic/js/quotes': ['error', 'single'],
    '@stylistic/js/rest-spread-spacing': 'error',
    '@stylistic/js/semi': 'error',
    '@stylistic/js/semi-spacing': 'error',
    '@stylistic/js/semi-style': 'error',
    '@stylistic/js/space-before-blocks': 'error',
    '@stylistic/js/space-before-function-paren': ['error', 'never'],
    '@stylistic/js/space-in-parens': 'error',
    '@stylistic/js/space-infix-ops': 'error',
    '@stylistic/js/space-unary-ops': 'error',

    '@stylistic/js/spaced-comment': ['error', 'always', {
      markers: ['/']
    }],

    '@stylistic/js/switch-colon-spacing': 'error',
    '@stylistic/js/template-curly-spacing': 'error',
    '@stylistic/js/template-tag-spacing': 'error',
    '@stylistic/js/wrap-iife': 'error',
    '@stylistic/js/wrap-regex': 'error',
    '@stylistic/js/yield-star-spacing': 'error'
  }
});
