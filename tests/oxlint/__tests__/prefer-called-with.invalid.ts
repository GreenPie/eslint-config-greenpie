import { expect, it, vi } from 'vitest';

it('checks only that a mock was called', () => {
  const fn = vi.fn();

  fn('value');

  expect(fn).toHaveBeenCalled();
});
