import { describe, expect } from 'vitest';
// oxlint-disable-next-line import/no-relative-parent-imports
import { woof } from '../helper';

describe(woof, () => {
  expect(woof()).toBeNull();
});
