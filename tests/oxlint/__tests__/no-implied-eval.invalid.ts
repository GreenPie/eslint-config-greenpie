import { it } from 'vitest';

const delayMs = 100;

it('uses string callback', () => {
	globalThis.setTimeout('console.log("done")', delayMs);
});