import {expect} from 'chai';
import '../src/Array/index';

describe('array prototype', () => {
    const arrType = [1, 'hi', {a: 1}]
    const rangeArr = []
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('should return 1' , () => {
        expect(arr.first()).to.equal(1);
    })

    it('should return 3' , () => {
        expect(arr.last()).to.equal(9);
    })

    it('should return 3' , () => {
        expect(arr.shuffle()).to.not.deep.equal(arr);
    })

    it('should return 3' , () => {
        expect(arrType.types()).to.deep.equal(['number', 'string', 'object']);
    })

    it('should return random array in range' , () => {
        expect(rangeArr.rangeArr(3, 30, 5)).to.have.length(5);
    })
})