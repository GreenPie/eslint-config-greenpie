function run(callback: () => void): void {
  if (Math.random() > 0.5) {
    callback();
    return;
  }

  Math.random();
}

export {
  run
};
