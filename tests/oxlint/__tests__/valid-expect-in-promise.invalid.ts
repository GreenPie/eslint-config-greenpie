import { expect, it } from 'vitest';

it('does not await the promise assertion', async () => {
  Promise.resolve('red').then(value => {
    expect(value).toBe('red');
  });
});
