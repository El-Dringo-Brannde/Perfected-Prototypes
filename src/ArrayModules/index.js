function types(arr){
    return arr.map(el => typeof el)
}

function rangeArr(low, high, size){
    let arr = []
    while(size > 0) {
        arr.push(Math.floor(Math.random() * high) + low)
        size--
    }
    return arr
}

export {
    types,
    rangeArr
}