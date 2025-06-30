import stylisticPlugin from '@stylistic/eslint-plugin';
import tsEslint from 'typescript-eslint';

// https://eslint.style/packages/js
export default tsEslint.config({
  plugins: {
    '@stylistic': stylisticPlugin
  },

  /**
   * {@link https://github.com/eslint-stylistic/eslint-stylistic/releases}
   * {@link https://eslint.style/rules}
   */
  rules: {
    '@stylistic/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/array-bracket-spacing': 'error',
    '@stylistic/array-element-newline': ['error', 'consistent'],

    '@stylistic/arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true
    }],

    '@stylistic/arrow-spacing': 'error',
    '@stylistic/block-spacing': 'error',
    '@stylistic/brace-style': 'error',
    '@stylistic/comma-dangle': 'error',
    '@stylistic/comma-spacing': 'error',
    '@stylistic/comma-style': 'error',
    '@stylistic/computed-property-spacing': 'error',
    '@stylistic/curly-newline': 'error',
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/eol-last': 'error',
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/function-call-spacing': 'error',
    '@stylistic/function-paren-newline': ['error', 'consistent'],
    '@stylistic/generator-star-spacing': 'error',
    '@stylistic/implicit-arrow-linebreak': 'error',
    '@stylistic/indent': ['error', 2],
    '@stylistic/indent-binary-ops': ['error', 2],
    '@stylistic/jsx-child-element-spacing': 'error',
    '@stylistic/jsx-closing-bracket-location': 'error',
    '@stylistic/jsx-closing-tag-location': 'error',
    '@stylistic/jsx-curly-brace-presence': 'error',
    '@stylistic/jsx-curly-newline': 'error',
    '@stylistic/jsx-curly-spacing': 'error',
    '@stylistic/jsx-equals-spacing': 'error',
    '@stylistic/jsx-first-prop-new-line': 'error',
    '@stylistic/jsx-function-call-newline': 'error',
    '@stylistic/jsx-indent': ['error', 2],
    '@stylistic/jsx-indent-props': ['error', 2],
    '@stylistic/jsx-max-props-per-line': 'error',
    '@stylistic/jsx-newline': 'error',
    '@stylistic/jsx-one-expression-per-line': 'error',
    '@stylistic/jsx-pascal-case': 'error',
    '@stylistic/jsx-props-no-multi-spaces': 'error',
    '@stylistic/jsx-quotes': 'error',
    '@stylistic/jsx-self-closing-comp': 'error',
    '@stylistic/jsx-sort-props': 'error',
    '@stylistic/jsx-tag-spacing': 'error',
    '@stylistic/jsx-wrap-multilines': 'error',
    '@stylistic/key-spacing': 'error',
    '@stylistic/keyword-spacing': 'error',
    '@stylistic/line-comment-position': 'error',
    '@stylistic/linebreak-style': 'error',

    '@stylistic/lines-around-comment': ['error', {
      allowBlockStart: true,
      allowObjectStart: true,
      allowArrayStart: true,
      allowClassStart: true,
      allowInterfaceStart: true,
      allowModuleStart: true,
      allowTypeStart: true,
      allowEnumStart: true
    }],

    // TODO: Lack of configuration. Can it be replaced by `padding-line-between-statements`?
    '@stylistic/lines-between-class-members': 'off',

    '@stylistic/max-len': ['error', 120, {
      ignoreUrls: true
    }],

    '@stylistic/max-statements-per-line': 'error',
    '@stylistic/member-delimiter-style': 'error',
    '@stylistic/multiline-comment-style': 'error',

    // If it requires multilines, so it's probably better to use "if-else" instead
    '@stylistic/multiline-ternary': ['error', 'never'],

    '@stylistic/new-parens': 'error',
    '@stylistic/newline-per-chained-call': 'error',

    '@stylistic/no-confusing-arrow': ['error', {
      onlyOneSimpleParam: true
    }],

    '@stylistic/no-extra-parens': ['error', 'all', {
      nestedBinaryExpressions: false
    }],

    '@stylistic/no-extra-semi': 'error',
    '@stylistic/no-floating-decimal': 'error',
    '@stylistic/no-mixed-operators': 'error',
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-multi-spaces': 'error',

    '@stylistic/no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 0
    }],

    '@stylistic/no-tabs': 'error',
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/nonblock-statement-body-position': 'error',

    '@stylistic/object-curly-newline': ['error', {
      /*
       * ObjectExpression
       * ObjectPattern
       * ImportDeclaration
       * ExportDeclaration
       * TSTypeLiteral
       * TSInterfaceBody
       * TSEnumBody
       */

      ObjectExpression: {
        consistent: true,
        multiline: true,
        minProperties: 2
      },

      ExportDeclaration: {
        multiline: true,
        minProperties: 1
      },

      TSInterfaceBody: {
        multiline: true,
        minProperties: 1
      },

      TSEnumBody: {
        multiline: true,
        minProperties: 1
      }
    }],

    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/object-property-newline': 'error',
    '@stylistic/one-var-declaration-per-line': 'error',
    '@stylistic/operator-linebreak': 'error',
    '@stylistic/padded-blocks': ['error', 'never'],

    '@stylistic/padding-line-between-statements': ['error', {
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

    '@stylistic/quote-props': ['error', 'as-needed'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/rest-spread-spacing': 'error',
    '@stylistic/semi': 'error',
    '@stylistic/semi-spacing': 'error',
    '@stylistic/semi-style': 'error',
    '@stylistic/space-before-blocks': 'error',

    '@stylistic/space-before-function-paren': ['error', {
      named: 'never'
    }],

    '@stylistic/space-in-parens': 'error',
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/space-unary-ops': 'error',

    '@stylistic/spaced-comment': ['error', 'always', {
      markers: ['/']
    }],

    '@stylistic/switch-colon-spacing': 'error',
    '@stylistic/template-curly-spacing': 'error',
    '@stylistic/template-tag-spacing': 'error',

    // TODO: This rule should be more granular
    '@stylistic/type-annotation-spacing': 'off',

    '@stylistic/type-generic-spacing': 'error',
    '@stylistic/type-named-tuple-spacing': 'error',
    '@stylistic/wrap-iife': 'error',
    '@stylistic/wrap-regex': 'error',
    '@stylistic/yield-star-spacing': 'error'
  }
});
