import { expect, it } from 'vitest';

function fail() {
  throw new Error('boom');
}

it('throws without checking the error message', () => {
  expect(() => fail()).toThrow();
});
