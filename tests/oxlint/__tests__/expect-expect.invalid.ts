import { describe, it } from 'vitest';

describe('expect expect', () => {
  it('runs without an assertion', () => {
    const value = 1;

    value.toString();
  });
});
