function readValue(): string {
  return 'value';
}

function normalize(value: string): string {
  return value.trim();
}

function render(value: string): string {
  return value.toUpperCase();
}

const value = readValue();
const normalizedValue = normalize(value);

render(normalizedValue);
