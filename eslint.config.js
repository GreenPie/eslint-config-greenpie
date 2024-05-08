import tseslint from 'typescript-eslint';
import baseConfig from './configs/base.js';
import stylisticJsConfig from './configs/stylistic/js.js';
import stylisticPlusConfig from './configs/stylistic/plus.js';
import typescriptConfig from './configs/typescript.js';

export default tseslint.config(
  ...baseConfig,
  ...typescriptConfig,
  ...stylisticJsConfig,
  ...stylisticPlusConfig,

  {
    linterOptions: {
      reportUnusedDisableDirectives: true
    },

    languageOptions: {
      parser: tseslint.parser,
      sourceType: 'module'
    },

    rules: {
      'max-lines': 'off',
      'no-magic-numbers': 'off',
      '@stylistic/js/quote-props': 'off'
    }
  },

  {
    files: ['*.js'],

    rules: {
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off'
    }
  }
);
