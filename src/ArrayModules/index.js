/**
 * Look through an array for types of each place
 * @param {[*]} arr - The array to be looked at
 * @returns {*} - The array of types the array contains
 */
function types(arr) {
	return arr.map(el => typeof el);
}

/**
 *
 * @param {number} low   - The lower limit of ranodomization
 * @param {number} high - the upper limit of the randomization
 * @param {number} size - How long the array should be
 * @returns {[number]} - An array of numbers within the given range
 */
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
