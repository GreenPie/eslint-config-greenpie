import { it, vi } from 'vitest';

it('replaces a method manually', () => {
  Date.now = vi.fn();
});
