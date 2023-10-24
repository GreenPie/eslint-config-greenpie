module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: ['./tsconfig.json']
  },

  plugins: [
    '@typescript-eslint'
  ],

  /*
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/CHANGELOG.md
   * https://typescript-eslint.io/rules/
   */
  rules: {
    // TODO: regroup rules by new categories

    // TypeScript Rules
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/class-literal-property-style': 'error',
    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',

    '@typescript-eslint/explicit-function-return-type': ['error', {
      allowExpressions: true
    }],

    '@typescript-eslint/explicit-member-accessibility': ['error', {
      accessibility: 'no-public'
    }],

    '@typescript-eslint/explicit-module-boundary-types': 'error',

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
      selector: 'default',
      format: ['strictCamelCase']
    }, {
      selector: 'variable',
      modifiers: ['const'],
      format: ['strictCamelCase', 'UPPER_CASE']
    }, {
      selector: 'variable',
      types: ['boolean'],
      format: ['StrictPascalCase'],
      prefix: ['is', 'should', 'has', 'can', 'did', 'will']
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
    }],

    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@typescript-eslint/no-mixed-enums': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',

    // Formatting Rules

    'block-spacing': 'off',
    '@typescript-eslint/block-spacing': 'error',

    'lines-around-comment': 'off',
    '@typescript-eslint/lines-around-comment': ['error', {
      allowBlockStart: true
    }],

    '@typescript-eslint/member-delimiter-style': 'error',

    // TODO: Not grouped yet below

    // TypeScript specific Rules

    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'off',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': 'error',

    // (variable === false) is OK
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/parameter-properties': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-destructuring': 'error',

    // Don't see any reasons to enforce this rule 🤔
    '@typescript-eslint/prefer-enum-initializers': 'off',

    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
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
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',

    // This rule should be more granular
    '@typescript-eslint/type-annotation-spacing': 'off',

    '@typescript-eslint/typedef': 'error',
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'error',

    /*
     * Extension Rules
     * https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#extension-rules
     */

    // Disable original ESLint rules in favour to extension rules
    'brace-style': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'default-param-last': 'off',
    'dot-notation': 'off',
    'func-call-spacing': 'off',
    'indent': 'off',
    'init-declarations': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'lines-between-class-members': 'off',
    'no-array-constructor': 'off',
    'no-dupe-class-members': 'off',
    'no-empty-function': 'off',
    'no-extra-parens': 'off',
    'no-extra-semi': 'off',
    'no-implied-eval': 'off',
    'no-invalid-this': 'off',
    'no-loop-func': 'off',
    'no-loss-of-precision': 'off',
    'no-magic-numbers': 'off',
    'no-redeclare': 'off',
    'no-restricted-imports': 'off',
    'no-shadow': 'off',
    'no-throw-literal': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'object-curly-spacing': 'off',
    'padding-line-between-statements': 'off',
    'prefer-destructuring': 'off',
    'quotes': 'off',
    'require-await': 'off',
    'return-await': 'off',
    'semi': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-infix-ops': 'off',

    // Extension Rules
    '@typescript-eslint/class-methods-use-this': 'error',
    '@typescript-eslint/brace-style': 'error',
    '@typescript-eslint/comma-dangle': 'error',
    '@typescript-eslint/comma-spacing': 'error',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/func-call-spacing': 'error',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/init-declarations': 'error',
    '@typescript-eslint/keyword-spacing': 'error',
    '@typescript-eslint/key-spacing': 'error',

    // Lack of configuration. Can it be replaced by `padding-line-between-statements`?
    '@typescript-eslint/lines-between-class-members': 'off',

    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-extra-parens': 'error',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',

    '@typescript-eslint/no-magic-numbers': ['warn', {
      ignoreEnums: true
    }],

    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-restricted-imports': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    '@typescript-eslint/padding-line-between-statements': ['error', {
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

    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/space-before-blocks': 'error',

    '@typescript-eslint/space-before-function-paren': ['error', {
      named: 'never'
    }],

    '@typescript-eslint/space-infix-ops': 'error'
  },

  overrides: [{
    files: ['*.ts', '*.mts', '*.cts', '*.tsx'],

    rules: {
      // https://typescript-eslint.io/docs/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      'no-undef': 'off'
    }
  }, {
    files: ['*.test.ts'],

    rules: {
      // Basically, we might have lot of magic numbers in tests
      '@typescript-eslint/no-magic-numbers': 'off'
    }
  }]
};
