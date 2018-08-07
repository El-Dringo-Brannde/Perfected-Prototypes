import { assert } from 'chai';
import { types, rangeArr } from '../src/ArrayModules/index';

describe('array prototype', () => {
   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
})