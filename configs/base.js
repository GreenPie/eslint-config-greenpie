/* eslint-disable @stylistic/line-comment-position */
/* eslint-disable no-inline-comments */
import eslintJs from '@eslint/js';
import { defineConfig } from 'eslint/config';

// oxlint-disable-next-line no-default-export
export default defineConfig(
  eslintJs.configs.recommended,

  {

    /**
     * {@link https://eslint.org/blog/category/release-notes}
     */

    rules: {
      /**
       * Off in favor of oxlint
       */

      'accessor-pairs': 'off',
      'array-callback-return': 'off',
      'arrow-body-style': 'off',
      'block-scoped-var': 'off',
      'class-methods-use-this': 'off',
      'constructor-super': 'off',
      'default-case-last': 'off',
      'default-case': 'off',
      'default-param-last': 'off',
      'for-direction': 'off',
      'func-names': 'off',
      'func-style': 'off',
      'getter-return': 'off',
      'grouped-accessor-pairs': 'off',
      'guard-for-in': 'off',
      'id-length': 'off',
      'init-declarations': 'off',
      'max-classes-per-file': 'off',
      'max-depth': 'off',
      'max-lines-per-function': 'off',
      'max-lines': 'off',
      'max-nested-callbacks': 'off',
      'max-params': 'off',
      'new-cap': 'off',
      'no-alert': 'off',
      'no-array-constructor': 'off',
      'no-async-promise-executor': 'off',
      'no-await-in-loop': 'off',
      'no-bitwise': 'off',
      'no-caller': 'off',
      'no-case-declarations': 'off',
      'no-class-assign': 'off',
      'no-compare-neg-zero': 'off',
      'no-cond-assign': 'off',
      'no-console': 'off',
      'no-const-assign': 'off',
      'no-constant-binary-expression': 'off',
      'no-constant-condition': 'off',
      'no-constructor-return': 'off',
      'no-continue': 'off',
      'no-control-regex': 'off',
      'no-debugger': 'off',
      'no-delete-var': 'off',
      'no-div-regex': 'off',
      'no-dupe-args': 'off', // Superseded by strict mode
      'no-dupe-class-members': 'off',
      'no-dupe-else-if': 'off',
      'no-dupe-keys': 'off',
      'no-duplicate-case': 'off',
      'no-duplicate-imports': 'off',
      'no-else-return': 'off',
      'no-empty-character-class': 'off',
      'no-empty-function': 'off',
      'no-empty-pattern': 'off',
      'no-empty-static-block': 'off',
      'no-empty': 'off',
      'no-eq-null': 'off',
      'no-eval': 'off',
      'no-ex-assign': 'off',
      'no-extend-native': 'off',
      'no-extra-bind': 'off',
      'no-extra-boolean-cast': 'off',
      'no-extra-label': 'off',
      'no-fallthrough': 'off',
      'no-func-assign': 'off',
      'no-global-assign': 'off',
      'no-implicit-coercion': 'off',
      'no-implied-eval': 'off',
      'no-import-assign': 'off',
      'no-inner-declarations': 'off',
      'no-invalid-regexp': 'off',
      'no-irregular-whitespace': 'off',
      'no-iterator': 'off',
      'no-label-var': 'off',
      'no-labels': 'off',
      'no-lone-blocks': 'off',
      'no-lonely-if': 'off',
      'no-loop-func': 'off',
      'no-loss-of-precision': 'off',
      'no-magic-numbers': 'off',
      'no-misleading-character-class': 'off',
      'no-multi-assign': 'off',
      'no-multi-str': 'off',
      'no-negated-condition': 'off',
      'no-nested-ternary': 'off',
      'no-new-func': 'off',
      'no-new-native-nonconstructor': 'off',
      'no-new-symbol': 'off', // Deprecated in ESLint v9
      'no-new-wrappers': 'off',
      'no-new': 'off',
      'no-nonoctal-decimal-escape': 'off',
      'no-obj-calls': 'off',
      'no-object-constructor': 'off',
      'no-octal': 'off', // Superseded by strict mode
      'no-param-reassign': 'error',
      'no-plusplus': 'off',
      'no-promise-executor-return': 'off',
      'no-proto': 'off',
      'no-prototype-builtins': 'off',
      'no-regex-spaces': 'off',
      'no-restricted-globals': 'off',
      'no-restricted-imports': 'off',
      'no-return-assign': 'off',
      'no-script-url': 'off',
      'no-self-assign': 'off',
      'no-self-compare': 'off',
      'no-sequences': 'off',
      'no-setter-return': 'off',
      'no-shadow-restricted-names': 'off',
      'no-sparse-arrays': 'off',
      'no-template-curly-in-string': 'off',
      'no-ternary': 'off',
      'no-this-before-super': 'off',
      'no-throw-literal': 'off',
      'no-unassigned-vars': 'off',
      'no-undef-init': 'off',
      'no-undef': 'off',
      'no-undefined': 'off',
      'no-unexpected-multiline': 'off',
      'no-unneeded-ternary': 'off',
      'no-unreachable': 'off',
      'no-unsafe-finally': 'off',
      'no-unsafe-negation': 'off',
      'no-unsafe-optional-chaining': 'off',
      'no-unused-expressions': 'off',
      'no-unused-labels': 'off',
      'no-unused-private-class-members': 'off',
      'no-unused-vars': 'off',
      'no-useless-backreference': 'off',
      'no-useless-call': 'off',
      'no-useless-catch': 'off',
      'no-useless-computed-key': 'off',
      'no-useless-concat': 'off',
      'no-useless-constructor': 'off',
      'no-useless-escape': 'off',
      'no-useless-rename': 'off',
      'no-useless-return': 'off',
      'no-var': 'off',
      'no-void': 'off',
      'no-warning-comments': 'off',
      'no-with': 'off', // Superseded by strict mode
      'operator-assignment': 'off',
      'prefer-destructuring': 'off',
      'prefer-exponentiation-operator': 'off',
      'prefer-numeric-literals': 'off',
      'prefer-object-has-own': 'off',
      'prefer-object-spread': 'off',
      'prefer-promise-reject-errors': 'off',
      'prefer-rest-params': 'off',
      'prefer-spread': 'off',
      'prefer-template': 'off',
      'preserve-caught-error': 'off',
      'require-await': 'off',
      'require-yield': 'off',
      'sort-imports': 'off',
      'sort-keys': 'off',
      'symbol-description': 'off',
      'unicode-bom': 'off',
      'use-isnan': 'off',
      'valid-typeof': 'off',
      'vars-on-top': 'off',
      curly: 'off',
      eqeqeq: 'off',
      radix: 'off',
      yoda: 'off',

      /**
       * Possible Problems
       *
       * {@link https://eslint.org/docs/rules/#possible-problems}
       */

      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
      'no-use-before-define': 'error',
      'no-useless-assignment': 'error',
      'require-atomic-updates': 'error',
      'no-redeclare': 'error',
      'sort-vars': 'error',

      /**
       * Suggestions
       *
       * {@link https://eslint.org/docs/rules/#suggestions}
       */
      camelcase: 'error',

      // Doesn't matter actually
      'capitalized-comments': ['warn', 'always', {
        ignorePattern: 'oxlint'
      }],

      complexity: 'error',
      'consistent-return': 'error',
      'consistent-this': 'error',
      'dot-notation': 'error',
      'func-name-matching': 'error',
      'id-denylist': 'error',
      'id-match': 'error',
      'logical-assignment-operators': 'error',
      'max-statements': 'off',
      'no-implicit-globals': 'error',
      'no-inline-comments': 'error',
      'no-invalid-this': 'error',
      'no-octal-escape': 'error',

      'no-restricted-exports': ['error', {
        restrictDefaultExports: {
          named: true,
          defaultFrom: true,
          namedFrom: true,
          namespaceFrom: true
        }
      }],

      'no-restricted-properties': 'error',
      'no-restricted-syntax': 'error',
      'no-shadow': 'error',

      'no-underscore-dangle': ['error', {
        allowInArrayDestructuring: false,
        allowInObjectDestructuring: false
      }],

      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-named-capture-group': 'error',
      'prefer-regex-literals': 'error',
      'require-unicode-regexp': 'error',
      strict: 'error'
    }
  }
);
