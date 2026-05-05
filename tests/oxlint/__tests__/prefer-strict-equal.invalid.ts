import { expect, it } from 'vitest';

it('uses toEqual for object equality', () => {
  expect({ value: 1 }).toEqual({ value: 1 });
});
