export class BadError extends Error {
  constructor(message: string) {
    this.message = message
  }
}

export class AnotherBadError extends Error {}
