import { describe, expect, it } from 'vitest';

let value = 0;

function setupValue() {
  value = 1;
}

setupValue();

describe('requires hooks', () => {
  it('uses a value created outside hooks', () => {
    expect(value).toBe(1);
  });
});
