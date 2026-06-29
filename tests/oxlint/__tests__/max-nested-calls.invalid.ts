function readValue(): string {
  return 'value';
}

function parse(value: string): string {
  return value;
}

function normalize(value: string): string {
  return value.trim();
}

function format(value: string): string {
  return value.toUpperCase();
}

function render(value: string): string {
  return value;
}

render(format(normalize(parse(readValue()))));
