type Done = (error: Error | undefined, value: string) => void;

function run(done: Done): void {
  done(new Error('failed'), 'value');
}

run((error, value) => {
  value.trim();
});
