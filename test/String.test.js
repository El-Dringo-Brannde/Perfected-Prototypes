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
   })

   describe('Camel Case', () => {
      it('should turn Brandon Dring into brandonDring', () => {
         const str = 'Brandon Dring'
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

   describe('String unique prototype', () => {
      it('should give back a unique set of elements from the list', () => {
         const arr = [1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6]
         assert.deepEqual(arr.unique(), [1, 2, 3, 4, 5, 6])
      })
   })
})