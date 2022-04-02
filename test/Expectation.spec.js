describe('expectations', () => {
    test('Math Test', () => {
      // Use .toBe for simple comparisons
      expect('Some String').toBe('Some String')
      expect(7999).toBe(7999)
      expect(3000 + 4999).toBe(7999)
  
      // Use .toEqual when comparing complex types
      expect({ type: 'array' }).toEqual({ type: 'array' })
      expect([7999]).toEqual([7999])
      expect([...[7999, 399, 4999]]).toEqual([7999, 399, 4999])
  
      // Use property Matchers if the final value is unknown
      const result = {
        value: Date.now() // A random Number
      }
  
      expect(result).toEqual({
        value: expect.any(Number)
      })
    })
  })