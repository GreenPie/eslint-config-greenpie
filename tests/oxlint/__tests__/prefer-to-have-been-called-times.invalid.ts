import { expect, it, vi } from 'vitest';

it('checks the mock calls array length directly', () => {
  const fn = vi.fn();

  fn('value');

  expect(fn.mock.calls).toHaveLength(1);
});
