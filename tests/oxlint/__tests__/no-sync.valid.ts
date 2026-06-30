import { readFileSync } from 'node:fs';

const source = readFileSync(import.meta.filename, 'utf8');

export {
  source
};
