import { afterAll, describe, expect, it } from 'vitest';

describe('cleanup', () => {
  let cleanedUp = false;
  afterAll(() => {
    cleanedUp = true;
  });

  it('runs a test', () => {
    expect(cleanedUp).toBe(false);
  });
});