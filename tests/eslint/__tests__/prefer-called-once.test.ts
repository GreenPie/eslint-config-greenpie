import { vi, test, expect } from 'vitest';

test('foo', () => {
  const mock = vi.fn();

  mock('foo');

  expect(mock).toBeCalledTimes(1);
  expect(mock).toHaveBeenCalledTimes(1);
});
