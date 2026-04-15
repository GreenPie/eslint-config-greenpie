import { vi, test, expect } from 'vitest';

test('foo', () => {
  const mock = vi.fn<(arg: string) => void>();

  mock('foo');

  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledTimes(1);
});
