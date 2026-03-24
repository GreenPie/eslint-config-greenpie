import { describe, expect, it } from 'vitest'

describe('non-strict boolean matchers', () => {
  it('should not use toBeTruthy', () => {
    const value = true

    expect(value).toBeTruthy()
  })

  it('should not use toBeFalsy', () => {
    const value = false

    expect(value).toBeFalsy()
  })

  it('should not use toBeTruthy for truthy values', () => {
    const value = 'string'

    expect(value).toBeTruthy()
  })
})
