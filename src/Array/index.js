Array.prototype.first = function() {
    try {
        return this[0]
    } catch(err) {
        throw new Error('expected array')
    }
}

Array.prototype.last = function() {
    try {
        return this[this.length-1]
    } catch(err) {
        throw new Error('expected array')
    }
}

Array.prototype.shuffle = function() {
    let newArr = [].concat(this)
    for(let i = newArr.length - 1; i >= 1 ; i--){
        let randEl = Math.floor(Math.random() * i);
        [newArr[i], newArr[randEl]] = [newArr[randEl], newArr[i]]
    }
    return newArr
}

Array.prototype.types = function(){
    try {
        return this.map(el => typeof el)
    } catch(err) {
        throw new Error('unexpected error encountered')
    }
}

Array.prototype.rangeArr = function(low, high, size) {
    while(size > 0) {
        this.push(Math.floor(Math.random() * high) + low)
        size--
    }
    return this
}

export default Array;