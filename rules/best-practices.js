/* eslint no-magic-numbers: 0 */

module.exports = {
  rules: {
    // Enforces getter/setter pairs in objects
    'accessor-pairs': 2,

    // Enforces return statements in callbacks of array's methods
    'array-callback-return': 2,

    // Treat var as Block Scoped
    'block-scoped-var': 2,

    /**
     * Enforce that class methods utilize this
     *
     * {@link http://eslint.org/docs/rules/class-methods-use-this}
     * @since ESLint v3.4.0
     */
    'class-methods-use-this': 'warn',

    // Limit Cyclomatic Complexity
    complexity: [2, 10],

    // Require Consistent Returns
    'consistent-return': 'error',

    /**
     * Require Following Curly Brace Conventions
     *
     * {@link http://eslint.org/docs/rules/curly}
     * @since ESLint v0.0.2
     */
    curly: ['error', 'all'],

    // Require Default Case in Switch Statements
    'default-case': 2,

    // Enforce newline before and after dot
    'dot-location': 0,

    // Require Dot Notation
    'dot-notation': [2, {
      allowPattern: '^[a-z]+(?:_[a-z]+)+$'
    }],

    // Require === and !==
    eqeqeq: 2,

    // Require Guarding for-in
    'guard-for-in': 2,

    // Disallow Use of Alert
    'no-alert': 2,

    // Disallow Use of caller/callee
    'no-caller': 2,

    // Disallow lexical declarations in case/default clauses
    'no-case-declarations': 2,

    // Disallow Regexs That Look Like Division
    'no-div-regex': 2,

    // Disallow return before else
    'no-else-return': 2,

    // Disallow empty functions
    'no-empty-function': 2,

    // Disallow empty destructuring patterns
    'no-empty-pattern': 2,

    // Disallow Null Comparisons
    'no-eq-null': 2,

    // Disallow eval()
    'no-eval': 2,

    // Disallow Extending of Native Objects
    'no-extend-native': 2,

    // Disallow unnecessary function binding
    'no-extra-bind': 2,

    // Disallow Unnecessary Labels
    'no-extra-label': 0,

    // Disallow Case Statement Fallthrough
    'no-fallthrough': 2,

    // Disallow Floating Decimals
    'no-floating-decimal': 2,

    /**
     * Disallow assignment to native objects or read-only global variables
     *
     * @since ESLint v3.3.0
     * {@link http://eslint.org/docs/rules/no-global-assign}
     */
    'no-global-assign': 'error',

    /**
     * Disallow the type conversion with shorter notations.
     *
     * @since ESLint v1.0.0-rc-2
     * {@link http://eslint.org/docs/rules/no-implicit-coercion}
     */
    'no-implicit-coercion': 'error',

    // Disallow var and Named Functions in Global Scope
    'no-implicit-globals': 2,

    // Disallow Implied eval()
    'no-implied-eval': 2,

    // Disallow this keywords outside of classes or class-like objects.
    'no-invalid-this': 0,

    // Disallow Iterator
    'no-iterator': 2,

    // Disallow Labeled Statements
    'no-labels': 2,

    // Disallow Unnecessary Nested Blocks
    'no-lone-blocks': 2,

    // Disallow Functions in Loops
    'no-loop-func': 2,

    // Disallow Magic Numbers
    'no-magic-numbers': 1,

    // Disallow multiple spaces
    'no-multi-spaces': 2,

    // Disallow Multiline Strings
    'no-multi-str': 2,

    // Disallow Reassignment of Native Objects
    'no-native-reassign': 2,

    // Disallow new For Side Effects
    'no-new': 2,

    // Disallow Function Constructor
    'no-new-func': 2,

    // Disallow Primitive Wrapper Instances
    'no-new-wrappers': 2,

    // Disallow Octal Literals
    'no-octal': 2,

    // Disallow Octal Escapes
    'no-octal-escape': 2,

    // Disallow Reassignment of Function Parameters
    'no-param-reassign': [1, { props: true }],

    // Disallow Use of __proto__
    'no-proto': 2,

    // Disallow Redeclaring Variables
    'no-redeclare': [2, { builtinGlobals: true }],

    // Disallow Assignment in return Statement
    'no-return-assign': [2, 'always'],

    /**
     * Disallows unnecessary `return await`
     *
     * @since ESLint v3.10.0
     * {@link http://eslint.org/docs/rules/no-return-await}
     */
    'no-return-await': 'error',

    // Disallow Script URLs
    'no-script-url': 2,

    // Disallow Self Assignment
    'no-self-assign': 2,

    // Disallow Self Compare
    'no-self-compare': 2,

    // Disallow Use of the Comma Operator
    'no-sequences': 2,

    // Restrict what can be thrown as an exception
    'no-throw-literal': 2,

    // Disallow unmodified conditions of loops
    'no-unmodified-loop-condition': 2,

    // Disallow Unused Expressions
    'no-unused-expressions': 2,

    // Disallow Unused Labels
    'no-unused-labels': 0,

    // Disallow unnecessary .call() and .apply()
    'no-useless-call': 2,

    // Disallow unnecessary concatenation of strings
    'no-useless-concat': 2,

    /**
     * Disallow unnecessary escape usage
     *
     * @since ESLint v2.5.0
     */
    'no-useless-escape': 'error',

    /**
     * Disallow redundant return statements
     *
     * @since ESLint v3.9.0
     * {@link http://eslint.org/docs/rules/no-useless-return}
     */
    'no-useless-return': 'error',

    // Disallow use of the void operator
    'no-void': 2,

    // Disallow Warning Comments
    'no-warning-comments': [1, {
      terms: ['todo', 'fixme', 'xxx', 'hate'],
      location: 'start'
    }],

    // No with Statements (replaced in `no-restricted-syntax`)
    'no-with': 2,

    /**
     * Require using Error objects as Promise rejection reasons
     *
     * {@link http://eslint.org/docs/rules/prefer-promise-reject-errors}
     * @since ESLint v3.14.0
     */
    'prefer-promise-reject-errors': 'off',

    // Require Radix Parameter
    radix: [2, 'always'],

    /**
     * Disallow async functions which have no await expression
     *
     * @since ESLint v3.11.0
     * {@link http://eslint.org/docs/rules/require-await}
     */
    'require-await': 'error',

    // Require Variable Declarations to be at the top of their scope
    'vars-on-top': 2,

    // Require IIFEs to be Wrapped
    'wrap-iife': [2, 'outside'],

    // Require or disallow Yoda Conditions
    yoda: [2, 'never'],

    // Strict Mode Directives
    strict: [2, 'never']
  }
};
