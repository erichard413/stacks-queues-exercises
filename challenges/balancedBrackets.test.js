const balancedBracket = require('./balancedBrackets')


describe("returns brackets", function() {
    it("returns no brackets if no brackets are in str", function() {
        expect(balancedBracket('hello')).toBe('(no brackets)')
    })
    it("returns false", function() {
        expect(balancedBracket('([hello))')).toBe(false)
        expect(balancedBracket('(nope]')).toBe(false)
        expect(balancedBracket('((ok) [nope)]')).toBe(false)
    })
    it("returns true", function() {
        expect(balancedBracket('(hi)[there]')).toBe(true)
        expect(balancedBracket('(hi [there])')).toBe(true)
        expect(balancedBracket('(((hi)))')).toBe(true)
    })
  })