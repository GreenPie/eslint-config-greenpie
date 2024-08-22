import tsEslint from 'typescript-eslint';
import eslintGreenPie from './index.js';

export default tsEslint.config(
  ...eslintGreenPie.configs.default,
  ...eslintGreenPie.configs.vue
);
