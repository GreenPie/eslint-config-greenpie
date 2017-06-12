/* eslint no-magic-numbers: 0 */

module.exports = {
  rules: {
    /**
     * Enforce line breaks after opening and before closing array brackets.
     *
     * @since ESLint v4.0.0-alpha.1
     * {@link http://eslint.org/docs/rules/array-bracket-newline}
     */
    'array-bracket-newline': 'off',

    // Disallow or enforce spaces inside of brackets
    'array-bracket-spacing': [2, 'never'],

    /**
     * Enforce line breaks between array elements
     *
     * @since ESLint v4.0.0-rc.0
     * {@link http://eslint.org/docs/rules/array-element-newline}
     */
    'array-element-newline': 'off',

    // Disallow or enforce spaces inside of single line blocks
    'block-spacing': [2, 'always'],

    // Require Brace Style
    'brace-style': [2, '1tbs', {
      allowSingleLine: false
    }],

    // Require Camelcase
    camelcase: [2, {
      properties: 'always'
    }],

    /**
     * Enforce or disallow capitalization of the first letter of a comment
     *
     * @since ESLint v3.11.0
     * {@link http://eslint.org/docs/rules/capitalized-comments}
     */
    'capitalized-comments': 'off',

    // Enforces spacing around commas
    'comma-spacing': [2, {
      before: false,
      after: true
    }],

    /**
     * Comma style
     *
     * @since ESLint v0.9.0
     * {@link http://eslint.org/docs/rules/comma-style}
     */
    'comma-style': ['error'],

    // Disallow or enforce spaces inside of computed properties
    'computed-property-spacing': [2, 'never'],

    // Require Consistent This
    'consistent-this': [1, 'self'],

    /**
     * Require or disallow newline at the end of files
     *
     * @since ESLint v0.7.1
     * {@link http://eslint.org/docs/rules/eol-last}
     */
    'eol-last': 'error',

    /**
     * Require or disallow spacing between function identifiers and their invocations
     *
     * @since ESLint v3.3.0
     * {@link http://eslint.org/docs/rules/func-call-spacing}
     */
    'func-call-spacing': ['error', 'never'],

    /**
     * Require function names to match the name of the variable
     * or property to which they are assigned
     *
     * @since ESLint v3.8.0
     * {@link http://eslint.org/docs/rules/func-name-matching}
     */
    'func-name-matching': 'error',

    // Require Function Expressions to have a Name
    'func-names': 0,

    // Enforce Function Style
    'func-style': [2, 'declaration', {
      allowArrowFunctions: true
    }],

    // Blacklist certain identifiers to prevent them being used
    'id-blacklist': 0,

    // Limit minimum and maximum length for identifiers
    'id-length': 0,

    // Require IDs to match a pattern
    'id-match': 0,

    /**
     * Enforce consistent indentation
     *
     * @since ESLint v0.14.0
     * {@link http://eslint.org/docs/rules/indent}
     */
    indent: ['error', 2, {
      SwitchCase: 1,
      MemberExpression: 1
    }],

    // Enforce JSX Quote Style
    'jsx-quotes': 0,

    // Enforce Property Spacing
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true,
      mode: 'strict'
    }],

    // Enforce spacing before and after keywords
    'keyword-spacing': [2, {
      before: true,
      after: true
    }],

    /**
     * Enforce position of line comments
     *
     * {@link http://eslint.org/docs/rules/line-comment-position}
     * @since ESLint v3.5.0
     */
    'line-comment-position': ['error', {
      position: 'above',
      applyDefaultPatterns: false
    }],

    // Disallow mixing CRLF and LF linebreaks
    'linebreak-style': [2, 'unix'],

    // Enforce empty lines around comments
    'lines-around-comment': [2, {
      beforeBlockComment: true,
      beforeLineComment: true,
      allowBlockStart: true,
      allowObjectStart: true
    }],

    // Limit Maximum Depth
    'max-depth': [2, 4],

    /**
     * Enforce a maximum line length
     *
     * {@link http://eslint.org/docs/rules/max-len}
     * @since ESLint v0.0.9, v3.5.0
     */
    'max-len': [2, 100, 2, {
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],

    /**
     * enforce a maximum file length
     *
     * @since ESLint v2.12.0
     * {@link http://eslint.org/docs/rules/max-lines}
     */
    'max-lines': ['warn', {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],

    // Set Maximum Depth of Nested Callbacks
    'max-nested-callbacks': [2, 3],

    // Limit Maximum Number of Parameters
    'max-params': [1, 4],

    // Limit Maximum Number of Statements
    'max-statements': 0,

    /**
     * Specify the Maximum Number of Statements Allowed per Line
     *
     * @since ESLint v2.5.0
     */
    'max-statements-per-line': 'error',

    /**
     * Enforce newlines between operands of ternary expressions
     *
     * @since ESLint v3.1.0
     * {@link http://eslint.org/docs/rules/multiline-ternary}
     */
    'multiline-ternary': 'off',

    // Require Constructors to Use Initial Caps
    'new-cap': 1,

    // Require Parens for Constructors
    'new-parens': 2,

    // Newline Per Chained Method Call
    'newline-per-chained-call': [0, { ignoreChainWithDepth: 3 }],

    // Disallow creation of dense arrays using the Array constructor
    'no-array-constructor': 2,

    // Disallow Bitwise Operators
    'no-bitwise': 2,

    // Disallow continue
    'no-continue': 2,

    // Disallows comments after code. Comments must come on their own lines
    'no-inline-comments': 2,

    // Disallow if as the Only Statement in an else Block
    'no-lonely-if': 2,

    /**
     * Disallow mixes of different operators
     *
     * @since ESLint v2.12.0
     * {@link http://eslint.org/docs/rules/no-mixed-operators}
     */
    'no-mixed-operators': 'off',

    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,

    /**
     * Disallow Use of Chained Assignment Expressions
     *
     * {@link http://eslint.org/docs/rules/no-multi-assign}
     * @since ESLint v3.14.0
     */
    'no-multi-assign': 'error',

    /**
     * Disallow multiple empty lines
     *
     * {@link http://eslint.org/docs/rules/no-multiple-empty-lines}
     * @since ESLint v0.9.0
     */
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0
    }],

    // Disallow use of negated expressions in conditions
    'no-negated-condition': 2,

    // Disallow Nested Ternaries
    'no-nested-ternary': 2,

    // Disallow the use of the Object constructor
    'no-new-object': 2,

    // Disallow ++ and --
    'no-plusplus': [2, {
      allowForLoopAfterthoughts: true
    }],

    // Disallow certain syntax
    'no-restricted-syntax': 0,

    /**
     * Disallow tabs in file
     *
     * @since ESLint v3.2.0
     * {@link http://eslint.org/docs/rules/no-tabs}
     */
    'no-tabs': 'error',

    // Disallow Ternary Operators
    'no-ternary': 0,

    // Disallow trailing spaces at the end of lines
    'no-trailing-spaces': 2,

    /**
     * Disallow Dangling Underscores in Identifiers
     *
     * @since ESLint v0.0.9
     * {@link http://eslint.org/docs/rules/no-underscore-dangle}
     */
    'no-underscore-dangle': 'off',

    // Disallow conditional expressions that can be expressed with simpler constructs
    'no-unneeded-ternary': [2, {
      defaultAssignment: true
    }],

    // Disallow whitespace before properties
    'no-whitespace-before-property': 2,

    /**
     * Enforce the location of single-line statements
     *
     * {@link http://eslint.org/docs/rules/nonblock-statement-body-position}
     * @since ESLint v3.17.0
     */
    'nonblock-statement-body-position': 'off',

    /**
     * Enforce consistent line breaks inside braces.
     *
     * @since ESLint v2.12.0
     * {@link http://eslint.org/docs/rules/object-curly-newline}
     */
    'object-curly-newline': ['error', {
      consistent: true
    }],

    // Disallow or enforce spaces inside of curly braces in objects
    'object-curly-spacing': [2, 'always'],

    // enforce placing object properties on separate lines
    'object-property-newline': 'warn',

    // Require or Disallow One Variable Declaration per Scope
    'one-var': [2, 'never'],

    // Require or disallow an newline around variable declarations
    'one-var-declaration-per-line': [2, 'always'],

    // Operator Assignment Shorthand
    'operator-assignment': 0,

    // Operator Linebreak
    'operator-linebreak': [2, 'after'],

    // Enforce padding within blocks
    'padded-blocks': [2, 'never'],

    /**
     * Require or disallow padding lines between statements
     *
     * @since ESLint v4.0.0-beta.0
     * {@link http://eslint.org/docs/rules/padding-line-between-statements}
     */
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'never', prev: 'directive', next: 'directive' }
    ],

    // Quoting Style for Property Names
    'quote-props': [2, 'as-needed', {
      keywords: false,
      unnecessary: true,
      numbers: false
    }],

    // Enforce Quote Style
    quotes: [2, 'single'],

    // Require JSDoc comment
    'require-jsdoc': 0,

    // Enforce or Disallow Semicolons
    semi: [2, 'always'],

    // Enforce spacing before and after semicolons
    'semi-spacing': [2, {
      before: false,
      after: true
    }],

    /**
     * Enforce location of semicolons
     *
     * @since ESLint v4.0.0-beta.0
     * {@link http://eslint.org/docs/rules/semi-style}
     */
    'semi-style': ['error', 'last'],

    // Import Sorting
    'sort-imports': 0,

    /**
     * Requires object keys to be sorted
     *
     * @since ESLint v3.3.0
     * {@link http://eslint.org/docs/rules/sort-keys}
     */
    'sort-keys': 'off',

    // Variable Sorting
    'sort-vars': 0,

    // Require Or Disallow Space Before Blocks
    'space-before-blocks': [2, 'always'],

    // Require or disallow a space before function parenthesis
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never'
    }],

    // Disallow or enforce spaces inside of parentheses
    'space-in-parens': [2, 'never'],

    // Require Spaces Around Infix Operators
    'space-infix-ops': 2,

    // Require or disallow spaces before/after unary operators
    'space-unary-ops': [2, {
      words: true,
      nonwords: false
    }],

    /**
     * Requires or disallows a whitespace (space or tab) beginning a comment
     *
     * @since ESLint v0.23.0
     * {@link http://eslint.org/docs/rules/spaced-comment}
     */
    'spaced-comment': ['error', 'always', {
      block: {
        balanced: true
      }
    }],

    /**
     * Enforce spacing around colons of switch statements
     *
     * @since ESLint v4.0.0-beta.0
     * {@link http://eslint.org/docs/rules/switch-colon-spacing}
     */
    'switch-colon-spacing': ['error', {
      after: true,
      before: false
    }],

    /**
     * Require or disallow spacing between template tags and their literals
     *
     * @since ESLint v3.15.0
     * {@link http://eslint.org/docs/rules/template-tag-spacing}
     */
    'template-tag-spacing': 'error',

    /**
     * Require or disallow the Unicode Byte Order Mark (BOM)
     *
     * @since ESLint v2.11.0
     * {@link http://eslint.org/docs/rules/unicode-bom}
     */
    'unicode-bom': ['error', 'never'],

    // Require Regex Literals to be Wrapped
    'wrap-regex': 1
  }
};
