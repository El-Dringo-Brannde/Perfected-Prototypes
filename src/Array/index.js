Array.prototype.first = function() {
    try {
        console.log(this)
        return this[0]
    } catch(err) {
        return err
    }
}

Array.prototype.last = function() {
    try {
        console.log(this)
        return this[this.length-1]
    } catch(err) {
        return err
    }
}

export default Array;