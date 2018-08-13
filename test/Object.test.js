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

      it('should be able to access array values in a nested obj', () => {
         const obj = { a: { b: [1, 2, 3] } }
         assert.equal(1, obj.try('a.b[0]'))
      })
   });

   describe('hasData object method', () => {
      it('should return true since the object is empty', () => {
         const obj = {}
         assert.equal(true, obj.hasData())
      })

      it('should return false since the obj is NOT empty', () => {
         const obj = { a: 1 }
         assert.equal(false, obj.hasData())
      })
   })

   describe('isObject object method', () => {
      it('should return true for an actual object', () => {
         const obj = {}
         assert.equal(Object.isObject(obj), true)
      })

      it('should return FALSE for an array', () => {
         const notObj = []
         assert.equal(Object.isObject(notObj), false)
      })

      it('should return FALSE for a function', () => {
         const notObj = function() { return 1 }
         assert.equal(Object.isObject(notObj), false)
      })
   })

   describe('mergeObjects  method', () => {
      it('should merge two object together', () => {
         let obj1 = { a: 1 }
         let obj2 = { b: 2 }
         assert.deepEqual(obj1.mergeObjects(obj2), { a: 1, b: 2 })
      })

      it('should merge multiple objects together', () => {
         let obj1 = { a: 1 }
         let obj2 = { b: 2 }
         let obj3 = { c: 3 }
         let obj4 = { d: 4 }
         assert.deepEqual(obj1.mergeObjects(obj2, obj3, obj4), { a: 1, b: 2, c: 3, d: 4 })
      })
   })

   describe('Object map prototype', () => {
      it('should return the mutated object', () => {
         const foo = { a: 1, b: 2 }
         let res = foo.mapOver((key, val) => {
            key = key + '1'
            val = val * 2
            return { [key]: val }
         })
         assert.deepEqual(res, { a1: 2, b1: 4 })
      })

      it('should return an empty object', () => {
         const foo = { a: 1, b: 2 }
         let res = foo.mapOver((key, val) => {
            key = key + '1'
            val = val * 2
         })
         assert.deepEqual(res, {})
      })
   })

   describe('Object eachKeyValue prototype', () => {
      it('should match the key value pairs appropriately', () => {
         const foo = { a: 1, b: 2 }
         foo.eachKeyValue((key, val) => {
            assert.equal(foo[key], val)
         })
      })
   })

   describe('Object reduce prototype', () => {
      it('should reduce the values and summate the total of 10', () => {
         const foo = { a: 1, b: 2, c: 3, d: 4 }
         assert.equal(10, foo.reduce((prev, [key, val]) => prev + val, 0))
      })

      it('should reduce the values and create a string', () => {
         const foo = { a: 'brandon ', b: 'dring ', c: 'rules' }
         assert.equal('brandon dring rules', foo.reduce((prev, [key, val]) => prev + val, ''))
      })

      it('should reduce the values and create an array', () => {
         const foo = { a: 1, b: 2, c: 3, d: 4 }
         assert.deepEqual([1, 2, 3, 4], foo.reduce((prev, [key, val]) => {
            prev.push(val)
            return prev
         }, []))
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

   describe('deepEqual prototype method', () => {
      it('should find that both objects are equal', () => {
         const obj1 = { a: 1, b: true, c: 'bar', d: x => x * 2 }
         const obj2 = { a: 1, b: true, c: 'bar', d: x => x * 2 }

         assert.deepEqual(obj1.deepEqual(obj2), true)
      })

      it('should find that the two objects are NOT equal', () => {
         const obj1 = { a: 1, b: true }
         const obj2 = { a: 1, b: true, c: 'bar' }

         assert.deepEqual(obj1.deepEqual(obj2), false)
      })
   })
})