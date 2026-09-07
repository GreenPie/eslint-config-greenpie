let currentChunk: string | null = 'initial';
let isDone = false;

while (currentChunk ? !isDone : false) {
  currentChunk = null;
  isDone = true;
}
