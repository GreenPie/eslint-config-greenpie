import vuePlugin from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';

/*
 * https://eslint.vuejs.org/rules/
 * https://github.com/vuejs/eslint-plugin-vue/releases
 */

// oxlint-disable-next-line no-default-export
export default defineConfig(
  ...vuePlugin.configs['flat/base'],

  {
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue']
      }
    },

    rules: {
      // Disabled in favor of oxlint rules

      'vue/define-emits-declaration': 'off',
      'vue/define-props-declaration': 'off',
      'vue/define-props-destructuring': 'off',
      'vue/max-props': 'off',
      'vue/no-export-in-script-setup': 'off',
      'vue/no-import-compiler-macros': 'off',
      'vue/no-multiple-slot-args': 'off',
      'vue/no-required-prop-with-default': 'off',
      'vue/prefer-import-from-vue': 'off',
      'vue/require-default-export': 'off',
      'vue/require-typed-ref': 'off',
      'vue/valid-define-emits': 'off',
      'vue/valid-define-props': 'off',

      // Disable some rules from other configs

      'consistent-return': 'off',
      'max-len': 'off',
      'no-useless-assignment': 'off',
      '@stylistic/indent': 'off',
      '@stylistic/max-len': 'off',

      /**
       * Priority A: Essential (Error Prevention)
       *
       * {@link https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention}
       */

      'vue/multi-word-component-names': 'error',
      'vue/no-arrow-functions-in-watch': 'error',
      'vue/no-async-in-computed-properties': 'error',
      'vue/no-child-content': 'error',
      'vue/no-computed-properties-in-data': 'error',
      'vue/no-dupe-keys': 'error',
      'vue/no-dupe-v-else-if': 'error',
      'vue/no-duplicate-attributes': 'error',
      'vue/no-mutating-props': 'error',
      'vue/no-parsing-error': 'error',
      'vue/no-ref-as-operand': 'error',
      'vue/no-reserved-component-names': 'error',
      'vue/no-reserved-keys': 'error',
      'vue/no-reserved-props': 'error',
      'vue/no-shared-component-data': 'error',
      'vue/no-side-effects-in-computed-properties': 'error',
      'vue/no-template-key': 'error',
      'vue/no-textarea-mustache': 'error',
      'vue/no-unused-components': 'error',

      'no-unused-vars': 'off',
      'vue/no-unused-vars': 'error',

      'vue/no-use-computed-property-like-method': 'error',
      'vue/no-use-v-if-with-v-for': 'error',
      'vue/no-useless-template-attributes': 'error',
      'vue/no-v-text-v-html-on-component': 'error',
      'vue/require-component-is': 'error',
      'vue/require-prop-type-constructor': 'error',
      'vue/require-render-return': 'error',
      'vue/require-v-for-key': 'error',
      'vue/require-valid-default-prop': 'error',
      'vue/return-in-computed-property': 'off',
      'vue/return-in-emits-validator': 'error',
      'vue/use-v-on-exact': 'error',
      'vue/valid-attribute-name': 'error',
      'vue/valid-next-tick': 'error',
      'vue/valid-template-root': 'error',
      'vue/valid-v-bind': 'error',
      'vue/valid-v-cloak': 'error',
      'vue/valid-v-else-if': 'error',
      'vue/valid-v-else': 'error',
      'vue/valid-v-for': 'error',
      'vue/valid-v-html': 'error',
      'vue/valid-v-if': 'error',
      'vue/valid-v-model': 'error',
      'vue/valid-v-on': 'error',
      'vue/valid-v-once': 'error',
      'vue/valid-v-pre': 'error',
      'vue/valid-v-show': 'error',
      'vue/valid-v-slot': 'error',
      'vue/valid-v-text': 'error',
      'vue/no-deprecated-data-object-declaration': 'error',
      'vue/no-deprecated-destroyed-lifecycle': 'error',
      'vue/no-deprecated-dollar-listeners-api': 'error',
      'vue/no-deprecated-dollar-scopedslots-api': 'error',
      'vue/no-deprecated-events-api': 'error',
      'vue/no-deprecated-filter': 'error',
      'vue/no-deprecated-functional-template': 'error',
      'vue/no-deprecated-html-element-is': 'error',
      'vue/no-deprecated-inline-template': 'error',
      'vue/no-deprecated-props-default-this': 'error',
      'vue/no-deprecated-router-link-tag-prop': 'error',
      'vue/no-deprecated-scope-attribute': 'error',
      'vue/no-deprecated-slot-attribute': 'error',
      'vue/no-deprecated-slot-scope-attribute': 'error',
      'vue/no-deprecated-v-bind-sync': 'error',
      'vue/no-deprecated-v-is': 'error',
      'vue/no-deprecated-v-on-native-modifier': 'error',
      'vue/no-deprecated-v-on-number-modifiers': 'error',
      'vue/no-deprecated-vue-config-keycodes': 'error',
      'vue/no-expose-after-await': 'error',
      'vue/no-lifecycle-after-await': 'error',
      'vue/no-v-for-template-key-on-child': 'error',
      'vue/no-watch-after-await': 'error',
      'vue/require-slots-as-functions': 'error',
      'vue/require-toggle-inside-transition': 'error',
      'vue/valid-v-is': 'error',
      'vue/valid-v-memo': 'error',

      /**
       * Priority B: Strongly Recommended (Improving Readability)
       *
       * {@link https://eslint.vuejs.org/rules/#priority-b-strongly-recommended-improving-readability}
       */

      'vue/attribute-hyphenation': 'error',
      'vue/component-definition-name-casing': 'error',

      'vue/first-attribute-linebreak': ['error', {
        singleline: 'beside',
        multiline: 'below'
      }],

      'vue/html-closing-bracket-newline': 'error',
      'vue/html-closing-bracket-spacing': 'error',
      'vue/html-end-tags': 'error',
      'vue/html-indent': 'error',
      'vue/html-quotes': 'error',
      'vue/html-self-closing': 'error',
      'vue/max-attributes-per-line': 'error',
      'vue/multiline-html-element-content-newline': 'error',
      'vue/mustache-interpolation-spacing': 'error',
      'vue/no-multi-spaces': 'error',
      'vue/no-spaces-around-equal-signs-in-attribute': 'error',
      'vue/no-template-shadow': 'error',
      'vue/one-component-per-file': 'error',
      'vue/prop-name-casing': 'error',
      'vue/require-default-prop': 'error',
      'vue/require-prop-types': 'error',
      'vue/singleline-html-element-content-newline': 'error',

      'vue/v-bind-style': ['error', 'shorthand', {
        sameNameShorthand: 'never'
      }],

      'vue/v-on-style': 'error',
      'vue/v-slot-style': 'error',
      'vue/require-explicit-emits': 'error',
      'vue/v-on-event-hyphenation': 'error',

      /**
       * Priority C: Recommended (Potentially Dangerous Patterns)
       *
       * {@link https://eslint.vuejs.org/rules/#priority-c-recommended-potentially-dangerous-patterns}
       */

      'vue/attributes-order': 'error',
      'vue/no-lone-template': 'error',
      'vue/no-v-html': 'error',
      'vue/order-in-components': 'error',
      'vue/this-in-template': 'error',

      /**
       * Uncategorized
       *
       * {@link https://eslint.vuejs.org/rules/#uncategorized}
       */

      'vue/block-lang': ['error', {
        script: {
          lang: 'ts'
        },

        style: {
          lang: 'scss'
        }
      }],

      'vue/block-order': ['error', {
        order: [
          'template',
          'script:not([setup])',
          'script[setup]',
          'style:not([module])',
          'style[module]'
        ]
      }],

      'vue/block-tag-newline': 'error',
      'vue/component-api-style': 'error',
      'vue/component-name-in-template-casing': 'error',
      'vue/component-options-name-casing': 'error',
      'vue/custom-event-name-casing': 'error',

      'vue/define-macros-order': ['error', {
        defineExposeLast: true
      }],

      'vue/enforce-style-attribute': ['error', {
        allow: ['module', 'plain']
      }],

      'vue/html-button-has-type': 'error',
      'vue/html-comment-content-newline': 'error',
      'vue/html-comment-content-spacing': 'error',
      'vue/html-comment-indent': 'error',
      'vue/match-component-file-name': 'error',
      'vue/match-component-import-name': 'error',

      'vue/max-lines-per-block': ['error', {
        script: 500,
        template: 500,
        style: 500,
        skipBlankLines: true
      }],

      'vue/max-template-depth': 'off',
      'vue/new-line-between-multi-line-property': 'error',
      'vue/next-tick-style': 'error',
      'vue/no-bare-strings-in-template': 'error',
      'vue/no-boolean-default': 'error',
      'vue/no-deprecated-delete-set': 'error',
      'vue/no-deprecated-model-definition': 'error',
      'vue/no-duplicate-attr-inheritance': 'error',
      'vue/no-duplicate-class-names': 'error',
      'vue/no-empty-component-block': 'error',
      'vue/no-multiple-objects-in-class': 'error',
      'vue/no-negated-v-if-condition': 'error',
      'vue/no-potential-component-option-typo': 'error',
      'vue/no-ref-object-reactivity-loss': 'error',
      'vue/no-restricted-block': 'error',
      'vue/no-restricted-call-after-await': 'error',
      'vue/no-restricted-class': 'error',
      'vue/no-restricted-component-names': 'error',
      'vue/no-restricted-component-options': 'error',
      'vue/no-restricted-custom-event': 'error',
      'vue/no-restricted-html-elements': 'error',
      'vue/no-restricted-props': 'error',
      'vue/no-restricted-static-attribute': 'error',
      'vue/no-restricted-v-bind': 'error',
      'vue/no-restricted-v-on': 'off',
      'vue/no-root-v-if': 'off',
      'vue/no-setup-props-reactivity-loss': 'error',
      'vue/no-static-inline-styles': 'error',
      'vue/no-template-target-blank': 'error',
      'vue/no-this-in-before-route-enter': 'error',
      'vue/no-undef-components': 'error',
      'vue/no-undef-properties': 'error',

      'vue/no-unsupported-features': ['error', {
        version: '^3.4.0'
      }],

      'vue/no-unused-emit-declarations': 'error',
      'vue/no-unused-properties': 'error',
      'vue/no-unused-refs': 'error',
      'vue/no-use-v-else-with-v-for': 'error',
      'vue/no-useless-mustaches': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/no-v-text': 'error',
      'vue/padding-line-between-blocks': 'error',
      'vue/padding-line-between-tags': 'off',
      'vue/padding-lines-in-component-definition': 'error',
      'vue/prefer-define-options': 'error',
      'vue/prefer-prop-type-boolean-first': 'error',
      'vue/prefer-separate-static-class': 'error',
      'vue/prefer-true-attribute-shorthand': 'error',
      'vue/prefer-use-template-ref': 'error',
      'vue/require-direct-export': 'error',
      'vue/require-emit-validator': 'error',
      'vue/require-explicit-slots': 'off',
      'vue/require-expose': 'error',
      'vue/require-macro-variable-name': 'error',
      'vue/require-name-property': 'error',
      'vue/require-prop-comment': 'off',
      'vue/require-typed-object-prop': 'error',

      'vue/script-indent': ['error', 2, {
        baseIndent: 1,
        switchCase: 1,
        ignores: []
      }],

      'vue/slot-name-casing': ['error', 'camelCase'],
      'vue/sort-keys': 'off',
      'vue/static-class-names-order': 'error',
      'vue/v-for-delimiter-style': 'error',

      // In Vue 3 the key is automatically assigned to the elements.
      'vue/v-if-else-key': 'off',

      'vue/v-on-handler-style': ['error', ['method', 'inline']],
      'vue/valid-define-options': 'error',

      /**
       * Extension Rules
       *
       * {@link https://eslint.vuejs.org/rules/#extension-rules}
       */

      'vue/array-bracket-newline': ['error', 'consistent'],
      'vue/array-bracket-spacing': 'error',
      'vue/array-element-newline': ['error', 'consistent'],
      'vue/arrow-spacing': 'error',
      'vue/block-spacing': 'error',
      'vue/brace-style': 'error',
      'vue/camelcase': 'error',
      'vue/comma-dangle': 'error',
      'vue/comma-spacing': 'error',
      'vue/comma-style': 'error',
      'vue/dot-location': 'error',
      'vue/dot-notation': 'error',
      'vue/eqeqeq': 'error',
      'vue/func-call-spacing': 'error',
      'vue/key-spacing': 'error',
      'vue/keyword-spacing': 'error',

      'vue/max-len': ['error', 120, {
        ignoreHTMLAttributeValues: true,
        ignoreComments: true
      }],

      'vue/multiline-ternary': ['error', 'never'],
      'vue/no-console': 'error',
      'vue/no-constant-condition': 'error',
      'vue/no-empty-pattern': 'error',
      'vue/no-extra-parens': 'error',
      'vue/no-irregular-whitespace': 'error',
      'vue/no-loss-of-precision': 'error',
      'vue/no-negated-condition': 'error',
      'vue/no-restricted-syntax': 'error',
      'vue/no-sparse-arrays': 'error',
      'vue/no-useless-concat': 'error',
      'vue/object-curly-newline': 'error',
      'vue/object-curly-spacing': ['error', 'always'],
      'vue/object-property-newline': 'error',
      'vue/object-shorthand': 'error',
      'vue/operator-linebreak': 'error',
      'vue/prefer-template': 'error',
      'vue/quote-props': ['error', 'as-needed'],
      'vue/space-in-parens': 'error',
      'vue/space-infix-ops': 'error',
      'vue/space-unary-ops': 'error',
      'vue/template-curly-spacing': 'error'
    }
  }
);
