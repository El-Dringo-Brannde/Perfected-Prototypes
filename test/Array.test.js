import { assert } from 'chai';
import '../src/Array/index';

describe('array prototype', () => {
   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   const users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': true }
   ];

   describe('Array first getter', () => {
      it('should return 1', () => {
         assert.equal(arr.first, 1)
      })
   })


   describe('Array last getter', () => {
      it('should return 3', () => {
         assert.equal(arr.last, 9)
      })
   })


   describe('Array shuffle prototype', () => {
      it('should return 3', () => {
         assert.notDeepEqual(arr.shuffle(), arr)
      })
   })


   describe('Array clear prototype', () => {
      it('should clear the array', () => {
         arr.clear()
         assert.equal(arr.length, 0)
      })
   })

   describe('Array remove prototype', () => {
      it('should remove all elements of the array ', () => {
         const array = [1, 2, 2, 2, 2, 3, 4]
         assert.deepEqual(array.remove(2), [1, 3, 4])
      })
   })

   describe('Array search prototype', () => {
      it('should find the obj in the array with the search function', () => {
         const res = users.search(o => { return o.age < 40 })
         assert.notEqual(res, undefined)
         assert.deepEqual(res, { 'user': 'barney', 'age': 36, 'active': true })
      })

      it('should find the obj in the array by passing in the object', () => {
         const res = users.search({ 'user': 'barney', 'age': 36, 'active': true })
         assert.notEqual(res, undefined)
         assert.deepEqual(res, { 'user': 'barney', 'age': 36, 'active': true })
      })

      it('should find the obj in the array when passing an array of values to match against', () => {
         const res = users.search(['active', false])
         assert.notEqual(res, undefined)
         assert.deepEqual(res, { 'user': 'fred', 'age': 40, 'active': false })
      })

      it('should find teh obj in the array when just passing in a value to match against', () => {
         const res = users.search('active')
         assert.notEqual(res, undefined)
         assert.deepEqual(res, { 'user': 'barney', 'age': 36, 'active': true })
      })
   })

   describe('Array search all prototype', () => {
      it('should find all elements in the array matching the search function', () => {
         const res = users.searchAll(o => { return o.age < 40 })
         assert.equal(res.length, 2)
         assert.deepEqual(res, [{ 'user': 'barney', 'age': 36, 'active': true },
         { 'user': 'pebbles', 'age': 1, 'active': true }])
      })

      it('should find all elements in the array matching the passed in object', () => {
         const res = users.searchAll({ active: true })
         assert.equal(res.length, 2)
         assert.deepEqual(res, [{ 'user': 'barney', 'age': 36, 'active': true },
         { 'user': 'pebbles', 'age': 1, 'active': true }])
      })


      it('should find all the objects in the array when passing an array of values to match against', () => {
         const res = users.searchAll(['active', false])
         assert.equal(res.length, 1)
         assert.deepEqual(res, [{ 'user': 'fred', 'age': 40, 'active': false }])
      })

      it('should find the objects in the array when just passing in a value to match against', () => {
         const res = users.searchAll('active')
         assert.equal(res.length, 2)
         assert.deepEqual(res, [{ 'user': 'barney', 'age': 36, 'active': true },
         { 'user': 'pebbles', 'age': 1, 'active': true }])
      })
   })
})