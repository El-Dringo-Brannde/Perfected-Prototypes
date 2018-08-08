function types(arr) {
	return arr.map(el => typeof el);
}

function rangeArr(low, high, size) {
	const arr = [];
	let loopSize = size;
	while (loopSize > 0) {
		arr.push(Math.floor(Math.random() * high) + low);
		loopSize--;
	}
	return arr;
}

export { types, rangeArr };
