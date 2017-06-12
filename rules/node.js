module.exports = {
  env: {
    node: true
  },

  rules: {
    /**
     * Disallow use of the Buffer() constructor.
     *
     * @since ESLint v4.0.0-alpha.0
     * {@link http://eslint.org/docs/rules/no-buffer-constructor}
     */
    'no-buffer-constructor': 'error',

    // Disallow process.env
    'no-process-env': 2,

    // Enforce Return After Callback
    'callback-return': 0,

    // Enforce require() on the top-level module scope
    'global-require': 2,

    // Enforce Callback Error Handling
    'handle-callback-err': 0,

    // Disallow Mixed Requires
    'no-mixed-requires': 0,

    // Disallow new require
    'no-new-require': 2,

    // Disallow string concatenation when using __dirname and __filename
    'no-path-concat': 2,

    // Disallow process.exit()
    'no-process-exit': 2,

    // Disallow specific imports
    'no-restricted-imports': 0,

    // Disallow Node modules
    'no-restricted-modules': 0,

    /**
     * Disallow certain object properties
     *
     * {@link http://eslint.org/docs/rules/no-restricted-properties}
     * @since ESLint v3.5.0
     */
    'no-restricted-properties': 'off',

    // Disallow Synchronous Methods
    'no-sync': 1
  }
};
