function getValue(shouldReturnOne: boolean): number {
  if (shouldReturnOne) {
    return 1;
  }

  return 2;
}

function logMessage(value: string): void {
  if (value.length > 0) {
    console.log(value);
  }
}

getValue(true);
logMessage('ok');
