function getValue(): string {
  return 'value';
}

function useValue(value: string): string {
  return value;
}

useValue(getValue());
