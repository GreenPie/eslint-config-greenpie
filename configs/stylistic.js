import stylisticPlugin from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

// https://eslint.style/packages/js

// oxlint-disable-next-line no-default-export
export default defineConfig({
  plugins: {
    '@stylistic': stylisticPlugin
  },

  /**
   * {@link https://github.com/eslint-stylistic/eslint-stylistic/releases}
   * {@link https://eslint.style/rules}
   */
  rules: {
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
    '@stylistic/function-call-spacing': 'error',
    '@stylistic/generator-star-spacing': 'error',
    '@stylistic/implicit-arrow-linebreak': 'error',
    '@stylistic/indent': ['error', 2],
    '@stylistic/indent-binary-ops': ['error', 2],

    // JSX formatting is outside this shared config's policy.
    '@stylistic/jsx-shorthand-boolean': 'off',
    '@stylistic/jsx-shorthand-fragment': 'off',

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

    '@stylistic/list-style': ['error', {
      empty: 'never',

      multiLine: {
        minItems: 1
      },

      overrides: {
        '{}': {
          singleLine: {
            spacing: 'always'
          }
        },

        // Conditions are not lists; space-in-parens handles their spacing.
        IfStatement: 'off',

        ObjectExpression: {
          singleLine: {
            maxItems: 1
          }
        },

        ExportNamedDeclaration: {
          singleLine: {
            maxItems: 0
          }
        },

        TSInterfaceBody: {
          singleLine: {
            maxItems: 0
          }
        },

        TSEnumBody: {
          singleLine: {
            maxItems: 0
          }
        },

        TSTypeLiteral: {
          singleLine: {
            maxItems: 1
          }
        }
      }
    }],

    '@stylistic/max-len': ['error', 120, {
      ignoreStrings: true,
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
    }, {
      blankLine: 'always',
      prev: {
        selector: 'ImportDeclaration',
        lineMode: 'multiline'
      },
      next: '*'
    }, {
      blankLine: 'always',
      prev: '*',
      next: {
        selector: 'ImportDeclaration',
        lineMode: 'multiline'
      }
    }, {
      blankLine: 'never',
      prev: {
        selector: 'ImportDeclaration',
        lineMode: 'singleline'
      },
      next: {
        selector: 'ImportDeclaration',
        lineMode: 'singleline'
      }
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
