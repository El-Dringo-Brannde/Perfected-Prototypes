const { assert } = require('chai')
require('./../src/Object/index')

describe('Object prototypes', () => {
   describe('try object derefrencing', () => {
      it('should return the value "bar"', () => {
         const obj = { foo: 'bar' }
         assert.equal('bar', obj.try('foo'))
      });

      it('should return false when accessing nonexistent value', () => {
         const obj = { foo: 'bar' }
         assert.equal(undefined, obj.try('bar'))
      })

      it('should dereference a nested object properly', () => {
         const obj = { foo: { bar: 1 } }

         assert.equal(1, obj.try('foo.bar'))
      })

      it('should deref objects with brackets ', () => {
         const obj = { foo: { bar: 1 } }
         assert.equal(1, obj.try('foo["bar"]'))
      })
   });

   describe('isEmpty object method', () => {
      it('should return true since the object is empty', () => {
         const obj = {}
         assert.equal(true, obj.isEmpty())
      })

      it('should return false since the objist is NOT empty', () => {
         const obj = { a: 1 }
         assert.equal(false, obj.isEmpty())
      })
   })

   describe('toArray object method', () => {
      it('should extract all the values from an object and return it as an array ', () => {
         const obj = {
            a: 1,
            b: 2
         }
         assert.deepEqual([1, 2], obj.toArray())
      })
      it('should return an empty array with an empty object ', () => {
         const obj = {}
         assert.deepEqual([], obj.toArray())
      })
   })

   describe('deepCopy object method', () => {
      it('should copy the object', () => {
         const obj = { a: { b: 2 } }
         assert.deepEqual(obj.deepCopy(), { a: { b: 2 } })
      })

      it('should not change the original value when being mutated', () => {
         const obj = { a: { b: 2 } }
         const obj2 = obj.deepCopy()
         obj2.a = 2
         assert.deepEqual(obj2, { a: 2 })
         assert.deepEqual(obj, { a: { b: 2 } })
      })
   })
})