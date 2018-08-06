Array.prototype.first = function() {
    try {
        return this[0]
    } catch(err) {
        return err
    }
}

Array.prototype.last = function() {
    try {
        return this[this.length-1]
    } catch(err) {
        return err
    }
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