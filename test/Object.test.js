const { assert } = require('chai')
require('./../src/Object/index')


describe('try object derefrencing', () => {


   it('should return the value "bar"', () => {
      const obj = { foo: 'bar' }
      assert.equal('bar', obj.try('foo'))
   });

   it('should return false when accessing nonexistent value', () => {
      const obj = { foo: 'bar' }
      assert.equal(false, obj.try('bar'))
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