import { readFileSync } from 'node:fs';

function readSource(): string {
  return readFileSync(import.meta.filename, 'utf8');
}

export {
  readSource
};
