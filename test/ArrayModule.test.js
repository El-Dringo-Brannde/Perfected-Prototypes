import {expect} from 'chai';
import {types, rangeArr} from '../src/ArrayModules/index';

describe('array modules', () => {
    const arrType = [1, 'hi', {a: 1}]

    it('should return array types' , () => {
        expect(types(arrType)).to.deep.equal(['number', 'string', 'object']);
    })

    it('should return random array in range' , () => {
        expect(rangeArr(3, 30, 5)).to.have.length(5);
    })

    it('should return elements in range' , () => {
        const tmpArr = rangeArr(3, 30, 5);
        for(let i = 0; i <= tmpArr.length; i++){
            expect(i).to.be.closeTo(3, 30);
        }
    })
})