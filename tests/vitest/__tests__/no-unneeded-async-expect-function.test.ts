import { describe, expect } from 'vitest';
import { woof } from '../helper';

describe(woof, () => {
  expect(woof()).toBeNull();
});
