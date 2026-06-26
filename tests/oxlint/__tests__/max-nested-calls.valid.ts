function getValue(): string {
  return 'value';
}

function useValue(value: string): string {
  return value;
}

const value = getValue();

useValue(value);
