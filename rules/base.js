/* eslint no-magic-numbers: 0 */

module.exports = {
  env: {
    browser: true,
    amd: false
  },

  rules: {
    /**
     * Enforce “for” loop update clause moving the counter in the right direction.
     *
     * @since ESLint v4.0.0-beta.0
     * {@link http://eslint.org/docs/rules/for-direction}
     */
    'for-direction': 'error',

    /**
     * Enforces that a return statement is present in property getters
     *
     * @since ESLint v4.2.0
     * {@link http://eslint.org/docs/rules/getter-return}
     */
    'getter-return': 'error',

    /**
     * Disallow await inside of loops
     *
     * @since ESLint v3.12.0
     * {@link http://eslint.org/docs/rules/no-await-in-loop}
     */
    'no-await-in-loop': 'error',

    // Disallow or Enforce Dangling Commas
    'comma-dangle': [2, 'never'],

    /**
     * Disallow comparing against -0
     *
     * {@link http://eslint.org/docs/rules/no-compare-neg-zero}
     * @since ESLint v3.17.0
     */
    'no-compare-neg-zero': 'error',

    // Disallow Assignment in Conditional Statements
    'no-cond-assign': [2, 'always'],

    // Disallow Use of console
    'no-console': 1,

    // Disallow use of constant expressions in condition
    'no-constant-condition': 2,

    // Disallow Controls Characters in Regular Expressions
    'no-control-regex': 1,

    // Disallow debugger
    'no-debugger': 2,

    // No duplicate arguments
    'no-dupe-args': 2,

    // Disallow Duplicate Keys
    'no-dupe-keys': 2,

    // Disallow a duplicate case label
    'no-duplicate-case': 2,

    // Disallow Empty Block Statements
    'no-empty': 2,

    // Disallow Empty Character Classes
    'no-empty-character-class': 2,

    // Disallow Assignment of the Exception Parameter
    'no-ex-assign': 2,

    // Disallow Extra Boolean Casts
    'no-extra-boolean-cast': 2,

    /**
     * Disallow unnecessary parentheses
     *
     * @since ESLint v0.1.4
     * {@link http://eslint.org/docs/rules/no-extra-parens}
     */
    'no-extra-parens': ['warn', 'all', {
      nestedBinaryExpressions: true
    }],

    // Disallow Extra Semicolons
    'no-extra-semi': 2,

    // Disallow Function Assignment
    'no-func-assign': 2,

    // Declarations in Program or Function Body
    'no-inner-declarations': [2, 'both'],

    // Disallow Invalid Regular Expressions
    'no-invalid-regexp': 2,

    // No irregular whitespace
    'no-irregular-whitespace': 2,

    // Disallow negated left operand of in operator
    'no-negated-in-lhs': 2,

    // Disallow Global Object Function Calls
    'no-obj-calls': 2,

    /**
     * Disallow use of Object.prototypes builtins directly
     *
     * @since ESLint v2.11.0
     */
    'no-prototype-builtins': 'error',

    // Disallow Spaces in Regular Expressions
    'no-regex-spaces': 2,

    // Disallow Sparse Arrays
    'no-sparse-arrays': 2,

    /**
     * Disallow template literal placeholder syntax in regular strings
     *
     * @since ESLint v3.3.0
     * {@link http://eslint.org/docs/rules/no-template-curly-in-string}
     */
    'no-template-curly-in-string': 'error',

    // Avoid unexpected multiline expressions
    'no-unexpected-multiline': 2,

    // disallow control flow statements in finally blocks
    'no-unsafe-finally': 'error',

    /**
     * Disallow negating the left operand of relational operators
     *
     * @since ESLint v3.3.0
     * {@link http://eslint.org/docs/rules/no-unsafe-negation}
     */
    'no-unsafe-negation': 'error',

    // Disallow Unreachable Code
    'no-unreachable': 2,

    // Require isNaN()
    'use-isnan': 2,

    // Validates JSDoc comments are syntactically correct
    'valid-jsdoc': 0,

    /**
     * Enforce comparing typeof expressions against valid strings
     *
     * {@link http://eslint.org/docs/rules/valid-typeof}
     * @since ESLint v0.5.0
     */
    'valid-typeof': ['error', {
      requireStringLiterals: true
    }]
  }
};
