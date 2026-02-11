import { configs } from './index.js';
import { defineConfig } from 'eslint/config';

// oxlint-disable-next-line no-default-export
export default defineConfig(
  ...configs.default,
  ...configs.vue,

  {
    rules: {
      '@stylistic/line-comment-position': 'off'
    }
  }
);
