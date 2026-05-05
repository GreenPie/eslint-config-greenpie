import { expect, it } from 'vitest';

it('uses a boolean equality expression', () => {
  const left = 1;
  const right = 1;

  expect(left === right).toBe(true);
});
