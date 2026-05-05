import { it, vi } from 'vitest';

it('uses a verbose promise mock', () => {
  vi.fn().mockImplementation(() => Promise.resolve(1));
});
