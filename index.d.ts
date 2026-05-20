import type { defineConfig } from 'eslint/config';

type FlatConfigArray = ReturnType<typeof defineConfig>;

export declare const configs: {
  default: FlatConfigArray;
  js: FlatConfigArray;
  ts: FlatConfigArray;
  vue: FlatConfigArray;
};
