export class CustomError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'CustomError'
  }
}

export class ValidationError extends Error {
  constructor() {
    super('Woof')
    this.name = 'ValidationError'
  }
}
