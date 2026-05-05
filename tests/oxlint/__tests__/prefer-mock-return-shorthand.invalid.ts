import { it, vi } from 'vitest';

it('uses a verbose return mock', () => {
  vi.fn().mockImplementation(() => 1);
});
