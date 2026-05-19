import { it } from 'vitest';

const delayMs = 100;

it('uses callback form', () => {
  globalThis.setTimeout(() => {}, delayMs);
});