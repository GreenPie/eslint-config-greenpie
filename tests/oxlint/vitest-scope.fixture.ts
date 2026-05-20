import { expect, test } from 'vitest';

test('Non-test fixture still uses test prefix', () => {
  const value = true;

  expect(value).toBe(true);
});
