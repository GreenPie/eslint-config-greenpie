import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

const worker = {
  run(value: number) {
    return value;
  }
};

describe('shared split vitest rules fixture', () => {
  beforeAll(() => {
    vi.spyOn(Date, 'now').mockReturnValue(1);
  });

  beforeEach(() => {
    worker.run(1);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it.each([[1]])('handles value %s', async value => {
    const getValue = vi.fn().mockResolvedValue(value);
    const echo = vi.fn().mockReturnValue(value);

    echo(value);
    echo(value + 1);

    await expect(getValue()).resolves.toBe(1);
    expect(echo).toHaveBeenCalledTimes(2);
    expect(echo).toHaveBeenCalledWith(1);
    expect([value]).toHaveLength(1);
    expect(value).toBe(1);
    expect({ value }).toStrictEqual({ value: 1 });
    expect(value).toBeLessThan(2);
    expect('snapshot value').toMatchSnapshot({}, 'snapshot value');
    expect(worker.run(1)).toBe(1);
    expect(() => {
      throw new Error('boom');
    }).toThrow('boom');
  });
});
