const { assert } = require('chai')
require('./../src/Array/index')

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
      it('should clear the original array', () => {
         const arr = [1, 2, 3, 4, 5]
         arr.clear()
         assert.equal(arr.length, 0)
      })

      it('should return an empty array', () => {
         const arr = [1, 2, 3, 4, 5]
         assert.equal(arr.clear().length, 0)
      })
   })

   describe('Array remove prototype', () => {
      it('should remove all elements of the array ', () => {
         const array = [1, 2, 2, 2, 2, 3, 4]
         assert.deepEqual(array.remove(2), [1, 3, 4])
      })
   })

   describe('Array findObj prototype', () => {
      it('should find the obj in the array with the findObj function', () => {
         const res = users.findObj(o => { return o.age < 40 })
         assert.notEqual(res, undefined)
         assert.deepEqual(res, { 'user': 'barney', 'age': 36, 'active': true })
      })

      it('should find the obj in the array by passing in the object', () => {
         const res = users.findObj({ 'user': 'barney', 'age': 36, 'active': true })
         assert.notEqual(res, undefined)
         assert.deepEqual(res, { 'user': 'barney', 'age': 36, 'active': true })
      })

      it('should find the obj in the array when passing an array of values to match against', () => {
         const res = users.findObj(['active', false])
         assert.notEqual(res, undefined)
         assert.deepEqual(res, { 'user': 'fred', 'age': 40, 'active': false })
      })

      it('should find the obj in the array when just passing in a value to match against', () => {
         const res = users.findObj('active')
         assert.notEqual(res, undefined)
         assert.deepEqual(res, { 'user': 'barney', 'age': 36, 'active': true })
      })
   })

   describe('Array empty prototype', () => {
      it('should return false on a full array', () => {
         const arr = [1, 2, 3]
         assert.equal(false, arr.isEmpty())
      })

      it('should return true on a empty array', () => {
         const arr = []
         assert.equal(true, arr.isEmpty())
      })
   })

   describe('Array access prototype', () => {
      it('should get the second element of the array', () => {
         const arr = [1, 2, 3]
         assert.equal(arr.access(2), 3)
      })

      it('should get the last element of the array', () => {
         const arr = [1, 2, 3]
         assert.equal(arr.access(-1), 3)
      })
   })

   describe('Array difference prototype', () => {
      it('should find no difference between the two arrays', () => {
         const arr1 = [1, 2, 3]
         const arr2 = [1, 2, 3]
         assert.deepEqual(arr1.diff(arr2), [])
      })

      it('should find the difference of "[2,3]" between the two arrays', () => {
         const arr1 = [1, 2, 3]
         const arr2 = [1]
         assert.deepEqual(arr1.diff(arr2), [2, 3])
      })
   })

   describe('Array deepEqual prototype', () => {
      it('should find that both arrays are equal', () => {
         const arr1 = [1, false, true, 'foo']
         const arr2 = [1, false, true, 'foo']

         assert.deepEqual(arr1.deepEqual(arr2), true)
      })

      it('should find that both arrays are NOT equal', () => {
         const arr1 = [1, false, true, 'foo']
         const arr2 = [1, false, true]

         assert.deepEqual(arr1.deepEqual(arr2), false)
      })
   })

   describe('Array findObj all prototype', () => {
      it('should find all elements in the array matching the findObj function', () => {
         const res = users.findAllObj(o => { return o.age < 40 })
         assert.equal(res.length, 2)
         assert.deepEqual(res, [{ 'user': 'barney', 'age': 36, 'active': true },
         { 'user': 'pebbles', 'age': 1, 'active': true }])
      })

      it('should find all elements in the array matching the passed in object', () => {
         const res = users.findAllObj({ active: true })
         assert.equal(res.length, 2)
         assert.deepEqual(res, [{ 'user': 'barney', 'age': 36, 'active': true },
         { 'user': 'pebbles', 'age': 1, 'active': true }])
      })


      it('should find all the objects in the array when passing an array of values to match against', () => {
         const res = users.findAllObj(['active', false])
         assert.equal(res.length, 1)
         assert.deepEqual(res, [{ 'user': 'fred', 'age': 40, 'active': false }])
      })

      it('should find the objects in the array when just passing in a value to match against', () => {
         const res = users.findAllObj('active')
         assert.equal(res.length, 2)
         assert.deepEqual(res, [{ 'user': 'barney', 'age': 36, 'active': true },
         { 'user': 'pebbles', 'age': 1, 'active': true }])
      })
   })
})