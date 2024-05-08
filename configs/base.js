import eslintJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslintJs.configs.recommended,

  {

    /**
     * {@link https://eslint.org/blog/category/release-notes}
     */

    rules: {

      /**
       * Possible Problems
       *
       * {@link https://eslint.org/docs/rules/#possible-problems}
       */

      'array-callback-return': 'error',
      'constructor-super': 'error',
      'for-direction': 'error',
      'getter-return': 'error',
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-const-assign': 'error',
      'no-constant-binary-expression': 'error',
      'no-constant-condition': 'error',
      'no-constructor-return': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-ex-assign': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-import-assign': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-new-symbol': 'error',
      'no-obj-calls': 'error',
      'no-promise-executor-return': 'error',
      'no-prototype-builtins': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-setter-return': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-this-before-super': 'error',
      'no-undef': 'error',
      'no-unexpected-multiline': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unsafe-optional-chaining': 'error',
      'no-unused-private-class-members': 'error',
      'no-unused-vars': 'error',
      'no-use-before-define': 'error',
      'no-useless-assignment': 'error',
      'no-useless-backreference': 'error',
      'require-atomic-updates': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error',

      /**
       * Suggestions
       *
       * {@link https://eslint.org/docs/rules/#suggestions}
       */
      'accessor-pairs': 'error',
      'arrow-body-style': 'error',
      'block-scoped-var': 'error',
      'camelcase': 'error',

      // Doesn't matter actually
      'capitalized-comments': 'warn',

      'class-methods-use-this': 'error',
      'complexity': 'error',
      'consistent-return': 'error',
      'consistent-this': 'error',
      'curly': 'error',
      'default-case': 'off',
      'default-case-last': 'error',
      'default-param-last': 'error',
      'dot-notation': 'error',
      'eqeqeq': 'error',
      'func-name-matching': 'error',
      'func-names': 'error',

      'func-style': ['error', 'declaration', {
        'allowArrowFunctions': true
      }],

      'grouped-accessor-pairs': 'error',
      'guard-for-in': 'error',
      'id-denylist': 'error',

      'id-length': ['error', {
        /// t — for translations
        'exceptions': ['t']
      }],

      'id-match': 'error',
      'init-declarations': 'error',
      'logical-assignment-operators': 'error',
      'max-classes-per-file': 'error',
      'max-depth': 'error',

      'max-lines': ['error', {
        max: 300,
        skipComments: true,
        skipBlankLines: true
      }],

      'max-lines-per-function': 'off',
      'max-nested-callbacks': 'error',
      'max-params': 'error',
      'max-statements': 'off',
      'multiline-comment-style': 'error',
      'new-cap': 'error',
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-console': 'error',
      'no-continue': 'error',
      'no-delete-var': 'error',
      'no-div-regex': 'error',
      'no-else-return': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-empty-static-block': 'error',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-label': 'error',
      'no-global-assign': 'error',
      'no-implicit-coercion': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-inline-comments': 'error',
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',

      'no-magic-numbers': ['warn', {
        enforceConst: true,
        detectObjects: true
      }],

      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-nonoctal-decimal-escape': 'error',
      'no-object-constructor': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': 'error',
      'no-plusplus': 'error',
      'no-proto': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-restricted-exports': 'error',
      'no-restricted-globals': 'error',
      'no-restricted-imports': 'error',
      'no-restricted-properties': 'error',
      'no-restricted-syntax': 'error',
      'no-return-assign': 'error',
      'no-script-url': 'error',
      'no-sequences': 'error',
      'no-shadow': 'error',
      'no-shadow-restricted-names': 'error',

      // Why not to use it in simple cases like "a ? b : c"
      'no-ternary': 'off',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-undefined': 'off',

      'no-underscore-dangle': ['error', {
        allowInArrayDestructuring: false,
        allowInObjectDestructuring: false
      }],

      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'error',
      'no-unused-labels': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-useless-escape': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',

      'no-void': ['error', {
        allowAsStatement: true
      }],

      // Just notify about TODO and FIXME comments
      'no-warning-comments': 'warn',

      'no-with': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'operator-assignment': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': 'error',
      'prefer-exponentiation-operator': 'error',
      'prefer-named-capture-group': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-regex-literals': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'radix': 'error',
      'require-await': 'error',
      'require-unicode-regexp': 'error',
      'require-yield': 'error',

      'sort-imports': ['error', {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true
      }],

      'sort-keys': 'off',
      'sort-vars': 'error',
      'strict': 'error',
      'symbol-description': 'error',
      'vars-on-top': 'error',
      'yoda': 'error',

      /**
       * Layout & Formatting
       *
       * {@link https://eslint.org/docs/rules/#layout-formatting}
       */

      'line-comment-position': 'error',
      'unicode-bom': 'error'
    }
  }
);
