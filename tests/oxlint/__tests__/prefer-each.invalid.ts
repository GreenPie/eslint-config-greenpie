import { expect, it } from 'vitest';

for (const value of [1, 2]) {
  it('loops over values manually', () => {
    expect(value).toBeGreaterThan(0);
  });
}
