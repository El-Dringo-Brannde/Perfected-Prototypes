import { assert } from 'chai'
import './../src/index';


describe('Safe object derefrencing', () => {


   it('should return the value "bar"', () => {
      const obj = { foo: 'bar' }
      assert.equal('bar', obj.get('foo'))
   });

   it('should return false when accessing nonexistent value', () => {
      const obj = { foo: 'bar' }
      assert.equal(false, obj.get('bar'))
   })

   it('should dereference a nested object properly', () => {
      const obj = { foo: { bar: 1 } }

      assert.equal(1, obj.get('foo.bar'))
   })

   it('should deref objects with brackets ', () => {
      const obj = { foo: { bar: 1 } }
      assert.equal(1, obj.get('foo["bar"]'))
   })
});