function run(callback: () => void): void {
  if (Math.random() > 0.5) {
    callback();
  }

  Math.random();
}

export {
  run
};
