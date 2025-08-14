import tsEslint from 'typescript-eslint';
import { configs } from './index.js';

// oxlint-disable-next-line no-default-export
export default tsEslint.config(
  ...configs.default,
  ...configs.vue
);
