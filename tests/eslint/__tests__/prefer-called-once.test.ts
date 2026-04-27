import { describe, expect, it, vi } from 'vitest';

describe('prefer-called-once rule tests', () => {
  it('foo', () => {
    const mock = vi.fn<(arg: string) => void>();

    mock('foo');

    expect(mock).toHaveBeenCalledTimes(1);
  });
});
