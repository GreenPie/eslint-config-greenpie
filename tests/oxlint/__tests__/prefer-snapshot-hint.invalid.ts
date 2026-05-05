import { expect, it } from 'vitest';

it('uses multiple snapshots without hints', () => {
  expect('first').toMatchSnapshot();
  expect('second').toMatchSnapshot();
});
