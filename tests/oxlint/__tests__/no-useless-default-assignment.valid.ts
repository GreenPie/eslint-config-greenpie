function process(callback: (val?: number) => number) {
  return callback();
}

process((a = 0) => a + 1);
