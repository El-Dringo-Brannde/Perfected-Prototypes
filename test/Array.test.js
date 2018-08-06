import {expect} from 'chai';
import '../src/Array/index';

describe('array prototype', () => {
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
    
    it('should clear the array', () => {
        arr.clear()
        expect(arr).to.have.length(0)
    })
})