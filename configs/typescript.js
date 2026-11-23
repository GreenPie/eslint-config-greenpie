import tsEslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

const oxlintTypeAwareRules = [
  '@typescript-eslint/await-thenable',
  '@typescript-eslint/consistent-type-exports',
  '@typescript-eslint/dot-notation',
  '@typescript-eslint/no-array-delete',
  '@typescript-eslint/no-base-to-string',
  '@typescript-eslint/no-confusing-void-expression',
  '@typescript-eslint/no-deprecated',
  '@typescript-eslint/no-duplicate-type-constituents',
  '@typescript-eslint/no-floating-promises',
  '@typescript-eslint/no-for-in-array',
  '@typescript-eslint/no-generated-empty-object-type',
  '@typescript-eslint/no-implied-eval',
  '@typescript-eslint/no-meaningless-void-operator',
  '@typescript-eslint/no-misused-promises',
  '@typescript-eslint/no-misused-spread',
  '@typescript-eslint/no-mixed-enums',
  '@typescript-eslint/no-redundant-type-constituents',
  '@typescript-eslint/no-unnecessary-condition',
  '@typescript-eslint/no-unnecessary-qualifier',
  '@typescript-eslint/no-unnecessary-template-expression',
  '@typescript-eslint/no-unnecessary-type-arguments',
  '@typescript-eslint/no-unnecessary-type-assertion',
  '@typescript-eslint/no-unnecessary-type-conversion',
  '@typescript-eslint/no-unnecessary-type-parameters',
  '@typescript-eslint/no-unsafe-argument',
  '@typescript-eslint/no-unsafe-assignment',
  '@typescript-eslint/no-unsafe-call',
  '@typescript-eslint/no-unsafe-class-instance-assignment',
  '@typescript-eslint/no-unsafe-enum-assignment',
  '@typescript-eslint/no-unsafe-enum-comparison',
  '@typescript-eslint/no-unsafe-member-access',
  '@typescript-eslint/no-unsafe-return',
  '@typescript-eslint/no-unsafe-type-assertion',
  '@typescript-eslint/no-unsafe-unary-minus',
  '@typescript-eslint/no-useless-default-assignment',
  '@typescript-eslint/non-nullable-type-assertion-style',
  '@typescript-eslint/only-throw-error',
  '@typescript-eslint/prefer-find',
  '@typescript-eslint/prefer-includes',
  '@typescript-eslint/prefer-nullish-coalescing',
  '@typescript-eslint/prefer-optional-chain',
  '@typescript-eslint/prefer-promise-reject-errors',
  '@typescript-eslint/prefer-readonly',
  '@typescript-eslint/prefer-reduce-type-parameter',
  '@typescript-eslint/prefer-regexp-exec',
  '@typescript-eslint/prefer-return-this-type',
  '@typescript-eslint/prefer-string-starts-ends-with',
  '@typescript-eslint/promise-function-async',
  '@typescript-eslint/related-getter-setter-pairs',
  '@typescript-eslint/require-array-sort-compare',
  '@typescript-eslint/require-await',
  '@typescript-eslint/restrict-plus-operands',
  '@typescript-eslint/restrict-template-expressions',
  '@typescript-eslint/return-await',
  '@typescript-eslint/strict-boolean-expressions',
  '@typescript-eslint/strict-void-return',
  '@typescript-eslint/switch-exhaustiveness-check',
  '@typescript-eslint/unbound-method',
  '@typescript-eslint/use-unknown-in-catch-callback-variable'
];

// oxlint-disable-next-line no-default-export
export default defineConfig({
  plugins: {
    '@typescript-eslint': tsEslint.plugin
  },

  languageOptions: {
    parser: tsEslint.parser,

    parserOptions: {
      extraFileExtensions: ['.vue'],
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

    ...Object.fromEntries(oxlintTypeAwareRules.map(rule => [rule, 'off'])),

    '@typescript-eslint/adjacent-overload-signatures': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-tslint-comment': 'off',
    '@typescript-eslint/class-literal-property-style': 'off',
    '@typescript-eslint/class-methods-use-this': 'off',
    '@typescript-eslint/consistent-generic-constructors': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/consistent-return': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/default-param-last': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/init-declarations': 'off',
    '@typescript-eslint/max-params': 'off',
    '@typescript-eslint/method-signature-style': 'off',
    '@typescript-eslint/no-array-constructor': 'off',
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',
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
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-misused-new': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-types': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-private-class-members': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-empty-export': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-wrapper-object-types': 'off',
    '@typescript-eslint/parameter-properties': 'off',
    '@typescript-eslint/prefer-as-const': 'off',
    '@typescript-eslint/prefer-destructuring': 'off',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/prefer-literal-enum-member': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/unified-signatures': 'off',

    // TODO: regroup rules by new categories

    // TypeScript Rules

    '@typescript-eslint/member-ordering': ['error', {
      default: [
        'signature',
        'field',
        'constructor',
        'method'
      ]
    }],
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

    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/typedef': 'error',

    /*
     * Extension Rules
     * https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#extension-rules
     */

    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error'
  }
}, {
  // See DEBT.md for when to remove the Vue type-aware fallback.
  files: ['**/*.vue'],
  rules: Object.fromEntries(oxlintTypeAwareRules.map(rule => [rule, 'error']))
});
