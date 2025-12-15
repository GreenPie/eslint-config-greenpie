import tsEslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

// oxlint-disable-next-line no-default-export
export default defineConfig({
  plugins: {
    '@typescript-eslint': tsEslint.plugin
  },

  languageOptions: {
    parser: tsEslint.parser,

    parserOptions: {
      projectService: true
    }
  },

  /*
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/CHANGELOG.md
   * https://typescript-eslint.io/rules/
   */

  rules: {
    /**
     * Disabled rules in favor of oxlint
     */

    '@typescript-eslint/adjacent-overload-signatures': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-tslint-comment': 'off',
    '@typescript-eslint/class-methods-use-this': 'off',
    '@typescript-eslint/consistent-generic-constructors': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/default-param-last': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/init-declarations': 'off',
    '@typescript-eslint/max-params': 'off',
    '@typescript-eslint/no-array-constructor': 'off',
    '@typescript-eslint/no-array-delete': 'off',
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-deprecated': 'off',
    '@typescript-eslint/no-dupe-class-members': 'off',
    '@typescript-eslint/no-duplicate-enum-values': 'off',
    '@typescript-eslint/no-duplicate-type-constituents': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-for-in-array': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/no-import-type-side-effects': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-meaningless-void-operator': 'off',
    '@typescript-eslint/no-misused-new': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-misused-spread': 'off',
    '@typescript-eslint/no-mixed-enums': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-redundant-type-constituents': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-types': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'off',
    '@typescript-eslint/no-unnecessary-template-expression': 'off',
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-type-assertion': 'off',
    '@typescript-eslint/no-unsafe-unary-minus': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-private-class-members': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-empty-export': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-wrapper-object-types': 'off',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/only-throw-error': 'off',
    '@typescript-eslint/prefer-as-const': 'off',
    '@typescript-eslint/prefer-destructuring': 'off',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/prefer-literal-enum-member': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-promise-reject-errors': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/prefer-return-this-type': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/related-getter-setter-pairs': 'off',
    '@typescript-eslint/require-array-sort-compare': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',

    // TODO: regroup rules by new categories

    // TypeScript Rules
    '@typescript-eslint/class-literal-property-style': 'error',

    'consistent-return': 'off',
    '@typescript-eslint/consistent-return': 'off',

    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',

    '@typescript-eslint/explicit-member-accessibility': ['error', {
      accessibility: 'no-public'
    }],

    '@typescript-eslint/member-ordering': ['error', {
      default: [
        'signature',
        'field',
        'constructor',
        'method'
      ]
    }],

    '@typescript-eslint/method-signature-style': 'error',

    '@typescript-eslint/naming-convention': ['error', {
      // Ignore destructured variables
      selector: 'variable',
      modifiers: ['destructured'],
      format: null
    }, {
      selector: 'default',
      format: ['strictCamelCase']
    }, {
      selector: 'variable',
      modifiers: ['const'],
      format: ['strictCamelCase', 'UPPER_CASE']
    }, {
      selector: 'typeLike',
      format: ['StrictPascalCase']
    }, {
      selector: 'objectLiteralProperty',
      format: null,
      modifiers: ['requiresQuotes']
    }, {
      selector: 'enumMember',
      format: ['StrictPascalCase']
    }, {
      selector: 'import',
      format: null
    }, {
      selector: 'parameter',
      format: ['camelCase'],
      leadingUnderscore: 'allow'
    }],

    // Formatting Rules

    // TODO: Not grouped yet below

    // TypeScript specific Rules

    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unnecessary-type-conversion': 'error',
    '@typescript-eslint/no-unnecessary-type-parameters': 'error',
    '@typescript-eslint/parameter-properties': 'error',
    '@typescript-eslint/prefer-find': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',

    /*
     * Problematic rule
     * Ex.: https://github.com/typescript-eslint/typescript-eslint/issues/2079
     */
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',

    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/typedef': 'error',
    '@typescript-eslint/unified-signatures': 'error',

    /*
     * Extension Rules
     * https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#extension-rules
     */

    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',

    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error'
  }
});
