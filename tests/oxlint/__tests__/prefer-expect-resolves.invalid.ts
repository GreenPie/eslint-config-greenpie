import { expect, it } from 'vitest';

it('awaits before creating the expectation', async () => {
  expect(await Promise.resolve(1)).toBe(1);
});
