import { configs } from './index.js';
import { defineConfig } from 'eslint/config';

// oxlint-disable-next-line no-default-export
export default defineConfig(
  {
    ignores: [
      'tests/oxlint/__tests__/*.valid.ts',
      'tests/oxlint/__tests__/*.invalid.ts',
      'tests/oxlint/__tests__/valid-filename.ts',
      'tests/oxlint/__tests__/InvalidFilename.ts'
    ]
  },

  ...configs.default,
  ...configs.vue,

  {
    rules: {
      '@stylistic/line-comment-position': 'off'
    }
  }
);
