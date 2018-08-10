const { assert, expect } = require('chai')
require('./../src/Number/index')

describe('Number prototype chain', () => {

   describe('Number round prototype', () => {
      it('should give back a whole number', () => {
         const num = 3.46583123
         assert.equal(3, num.round())
      })

      it('should round to one decimal place', () => {
         const num = 3.46583123
         assert.equal(3.5, num.round(1))
      })

      it('should round to second decimal place', () => {
         const num = 3.46583123
         assert.equal(3.47, num.round(2))
      })
   })

   describe('Number Random prototype', () => {
      it('should generate a number between 0 and 5', () => {
         expect(Number.random(0, 5)).to.be.gte(0)
         expect(Number.random(0, 5)).to.be.lte(5)
      })
   })

   describe('Number isNumber prototype', () => {
      it('should return true for an actual number', () => {
         const num = 12355

         assert.equal(Number.isNumber(num), true)
      })

      it('should return false for a string of numbers', () => {
         const notNum = '12345'

         assert.equal(Number.isNumber(notNum), false)
      })
   })
})