import stylisticPlusPlugin from '@stylistic/eslint-plugin-plus';
import tseslint from 'typescript-eslint';

// https://eslint.style/packages/plus
export default tseslint.config({
  plugins: {
    '@stylistic/plus': stylisticPlusPlugin
  },

  /**
   * {@link https://github.com/eslint-stylistic/eslint-stylistic/releases}
   */
  rules: {
    '@stylistic/plus/indent-binary-ops': ['error', 2],
    '@stylistic/plus/type-generic-spacing': 'error',
    '@stylistic/plus/type-named-tuple-spacing': 'error'
  }
});
