const merger = require('./../merger')

const newArray = {}

newArray.first = function() {
    try {
        return this[0]
    } catch(err) {
        throw new Error('expected array')
    }
}

newArray.last = function() {
    try {
        return this[this.length-1]
    } catch(err) {
        throw new Error('expected array')
    }
}

newArray.shuffle = function() {
    let newArr = [].concat(this)
    for(let i = newArr.length - 1; i >= 1 ; i--){
        let randEl = Math.floor(Math.random() * i);
        [newArr[i], newArr[randEl]] = [newArr[randEl], newArr[i]]
    }
    return newArr
}

merger(Array.prototype, newArray)

export default Array;