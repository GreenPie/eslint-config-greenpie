module.exports = {
  plugins: ['jest'],

  /**
   * {@link https://github.com/jest-community/eslint-plugin-jest/blob/main/CHANGELOG.md}
   */
  rules: {

    /**
     * General rules
     *
     * {@link https://github.com/jest-community/eslint-plugin-jest#rules}
     */

    'jest/consistent-test-it': 'error',
    'jest/expect-expect': 'error',
    'jest/max-expects': 'error',
    'jest/max-nested-describe': 'error',
    'jest/no-alias-methods': 'error',
    'jest/no-commented-out-tests': 'error',
    'jest/no-conditional-expect': 'error',
    'jest/no-conditional-in-test': 'error',
    'jest/no-deprecated-functions': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-done-callback': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-hooks': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-interpolation-in-snapshots': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-large-snapshots': 'error',
    'jest/no-mocks-import': 'error',
    'jest/no-restricted-jest-methods': 'off',

    /**
     * This rule should be used with exact list of matchers
     * {@link https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-matchers.md}
     */
    'jest/no-restricted-matchers': 'off',

    'jest/no-standalone-expect': ['error', {
      additionalTestBlockFunctions: ['it']
    }],

    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-called-with': 'error',
    'jest/prefer-comparison-matcher': 'error',
    'jest/prefer-each': 'error',
    'jest/prefer-equality-matcher': 'error',
    'jest/prefer-expect-assertions': 'error',
    'jest/prefer-expect-resolves': 'error',
    'jest/prefer-hooks-in-order': 'error',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-lowercase-title': 'error',
    'jest/prefer-mock-promise-shorthand': 'error',
    'jest/prefer-snapshot-hint': 'error',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-todo': 'error',
    'jest/require-hook': 'error',
    'jest/require-to-throw-message': 'error',
    'jest/require-top-level-describe': 'error',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-title': 'error',

    // TypeScript rules
    'jest/unbound-method': 'error'
  }
};
