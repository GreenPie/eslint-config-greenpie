/* eslint no-magic-numbers: 0 */

module.exports = {
  rules: {
    // Enforce/Disallow Variable Initializations
    'init-declarations': 0,

    // Disallow Variables Deletion
    'no-delete-var': 2,

    // Disallow Labels That Are Variables Names
    'no-label-var': 0,

    // Disallow specific global variables
    'no-restricted-globals': 0,

    /**
     * Disallow variable declarations from shadowing variables declared in the outer scope
     *
     * @since ESLing v0.0.9
     * {@link https://eslint.org/docs/rules/no-shadow}
     */
    'no-shadow': 'error',

    // Disallow Shadowing of Restricted Names
    'no-shadow-restricted-names': 2,

    // Disallow Undeclared Variables
    'no-undef': [2, {
      typeof: true
    }],

    // Disallow Initializing to undefined
    'no-undef-init': 0,

    // Disallow Use of undefined Variable
    'no-undefined': 2,

    /**
     * Disallow Unused Variables
     *
     * {@link http://eslint.org/docs/rules/no-unused-vars}
     * @since ESLint v0.0.9
     */
    'no-unused-vars': ['error', {
      ignoreRestSiblings: true
    }],

    // Disallow Early Use
    'no-use-before-define': 2
  }
};
