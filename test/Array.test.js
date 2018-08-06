import {expect} from 'chai';
import '../src/Array/index';

describe('array prototype', () => {
    const arr = [1, 2, 3];
    const arrType = [1, 'hi', {a: 1}]
    const rangeArr = []

    it('should return 1' , () => {
        expect(arr.first()).to.equal(1);
    })

    it('should return 3' , () => {
        expect(arr.last()).to.equal(3);
    })

    it('should return 3' , () => {
        expect(arrType.types()).to.deep.equal(['number', 'string', 'object']);
    })

    it('should return random array in range' , () => {
        expect(rangeArr.rangeArr(3, 30, 5)).to.have.length(5);
    })
})