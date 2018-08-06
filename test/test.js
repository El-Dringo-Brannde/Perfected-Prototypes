import {assert} from 'chai';

const foo = "test"

it('foo type', () => {
    assert.typeOf(foo, 'string')
})