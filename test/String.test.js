const { assert } = require('chai')
require('./../src/String/index')


describe('String prototype', () => {

   describe('numberization of a number string', () => {
      it('should turn "1000000" to "1,000,000"', () => {
         const str = '1000000'
         assert.equal(str.numberize(), '1,000,000')
      })

      it('should keep "Foo" as "Foo"', () => {
         const str = 'Foo'
         assert.equal(str.numberize(), 'Foo')
      })

   })

   describe('Startcase', () => {
      it('should turn brandon dring to Brandon Dring', () => {
         const str = 'brandon dring'
         assert.equal(str.startCase(), 'Brandon Dring')
      })

      it('should turn BRANDON DRING to Brandon Dring', () => {
         const str = 'BRANDON DRING'
         assert.equal(str.startCase(), 'Brandon Dring')
      })
   })

   describe('Camel Case', () => {
      it('should turn Brandon Dring into brandonDring', () => {
         const str = 'Brandon Dring'
         assert.equal(str.camelCase(), 'brandonDring')
      })

      it('should turn BRANDON DRING to brandonDring', () => {
         const str = 'BRANDON DRING'
         assert.equal(str.camelCase(), 'brandonDring')
      })
   })

   describe('HTML escape Case', () => {
      it('should turn "brandon, kelli, abby & poppy" into "brandon, kelli, abby &amp; poppy"', () => {
         const str = 'brandon, kelli, abby & poppy'
         assert.equal(str.HTMLescape(), 'brandon, kelli, abby &amp; poppy')
      })
   })

   describe('String contains prototype', () => {
      it(`should find 'fox' in 'the quick brown fox jumps over the lazy dog'`, () => {
         const str = 'the quick brown fox jumps over the lazy dog'
         assert.equal(str.contains('fox'), true)
      })

      it(`should NOT find 'poop' in 'the quick brown fox jumps over the lazy dog'`, () => {
         const str = 'the quick brown fox jumps over the lazy dog'
         assert.equal(str.contains('poop'), false)
      })
   })

   describe('String isString method', () => {
      it('should return true for an actual string', () => {
         const str = 'Im very sleepy'
         assert.equal(String.isString(str), true)
      })

      it('should return false for a number', () => {
         const notStr = 13245
         assert.equal(String.isString(notStr), false)
      })
   })
})