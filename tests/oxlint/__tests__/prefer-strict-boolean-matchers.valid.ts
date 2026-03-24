import { describe, expect, it } from 'vitest'

describe('strict boolean matchers', () => {
  it('should use strict boolean matchers', () => {
    const value = true
    const otherValue = false

    expect(value).toBe(true)
    expect(otherValue).toBe(false)
    expect(value).not.toBe(false)
  })

  it('should use toBeNull for null checks', () => {
    const value = null

    expect(value).toBeNull()
  })

  it('should use toBeUndefined for undefined checks', () => {
    const value = undefined

    expect(value).toBeUndefined()
  })
})
