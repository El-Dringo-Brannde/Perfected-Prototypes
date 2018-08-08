const { find, filter, pull } = require('lodash');

const extensionArray = {};

/**
 * Using the current array, shuffle the values and return new array (Doesn't mutate original).
 * @returns {[*]} - The newly shuffled array of values
 */
extensionArray.shuffle = function shuffle() {
	const newArr = [].concat(this);
	for (let i = newArr.length - 1; i >= 1; i--) {
		const randEl = Math.floor(Math.random() * i);
		[newArr[i], newArr[randEl]] = [newArr[randEl], newArr[i]];
	}
	return newArr;
};

/**
 * Empties the array
 * @returns {Array}
 */
extensionArray.clear = function clear() {
	this.splice(0, this.length);
	return [];
};

extensionArray.remove = function remove(selector) {
	return pull(this, selector);
};

/**
 * Search for the first value that matches query in array, implemented with lodash 'find' function
 *
 * @param {function|object|array|string} selector - Function:  A truthy function that specifies what your searching for
 * @param {Object} selector - Object:  The object trying to be matched in the array
 * @param {Array} selector - Array: The array of values correlating to what is being matched
 * @param {string} selector - String: The string value trying to match against
 * @returns {*} The first matched obj in the array
 */
extensionArray.findObj = function findObj(selector) {
	return find(this, selector);
};

/**
 * Checks to see if the array is empty
 * @returns {boolean}
 */
extensionArray.isEmpty = function empty() {
	return this.length === 0;
};

/**
 * Find all instances of Objects in a Array
 * @param {function|object|array|string} selector - Function:  A truthy function that specifies what your searching for
 * @param {Object} selector - Object:  The object trying to be matched in the array
 * @param {Array} selector - Array: The array of values correlating to what is being matched
 * @param {string} selector - String: The string value trying to match against
 * @returns {[*]} - Array of matched objects
 */
extensionArray.findAllObj = function findAllObj(selector) {
	return filter(this, selector);
};

module.exports = extensionArray;
