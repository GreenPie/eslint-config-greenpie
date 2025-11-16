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
    '@typescript-eslint/no-dupe-class-members': 'off',
    '@typescript-eslint/no-duplicate-enum-values': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'off',
    '@typescript-eslint/no-import-type-side-effects': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-misused-new': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-restricted-imports': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'off',
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-empty-export': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-wrapper-object-types': 'off',
    '@typescript-eslint/prefer-as-const': 'off',
    '@typescript-eslint/prefer-destructuring': 'off',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/prefer-literal-enum-member': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',

    // TODO: regroup rules by new categories

    // TypeScript Rules

    '@typescript-eslint/await-thenable': 'error',
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

    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@typescript-eslint/no-mixed-enums': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-unsafe-type-assertion': 'error',
    '@typescript-eslint/no-unsafe-unary-minus': 'error',

    // Formatting Rules

    // TODO: Not grouped yet below

    // TypeScript specific Rules

    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-misused-spread': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',

    // (variable === false) is OK
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unnecessary-type-conversion': 'error',
    '@typescript-eslint/no-unnecessary-type-parameters': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/only-throw-error': 'error',
    '@typescript-eslint/parameter-properties': 'error',
    '@typescript-eslint/prefer-find': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-promise-reject-errors': 'error',
    '@typescript-eslint/prefer-readonly': 'error',

    /*
     * Problematic rule
     * Ex.: https://github.com/typescript-eslint/typescript-eslint/issues/2079
     */
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',

    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-return-this-type': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/related-getter-setter-pairs': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',

    '@typescript-eslint/switch-exhaustiveness-check': ['error', {
      considerDefaultExhaustiveForUnions: true
    }],

    '@typescript-eslint/typedef': 'error',
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',

    /*
     * Extension Rules
     * https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#extension-rules
     */

    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',

    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',

    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',

    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/no-array-delete': 'error',
    '@typescript-eslint/no-deprecated': 'error',
    '@typescript-eslint/no-restricted-types': 'error'
  }
});
