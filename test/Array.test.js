import {expect} from 'chai';
import '../src/Array/index';

describe('array prototype', () => {
    const arr = [1, 2, 3];

    it('should return 1' , () => {
        expect(arr.first()).to.equal(1);
    })

    it('should return 3' , () => {
        expect(arr.last()).to.equal(3);
    })
})