const { find, filter, pull } = require('lodash');

const extensionArray = {};

extensionArray.shuffle = function shuffle() {
	const newArr = [].concat(this);
	for (let i = newArr.length - 1; i >= 1; i--) {
		const randEl = Math.floor(Math.random() * i);
		[newArr[i], newArr[randEl]] = [newArr[randEl], newArr[i]];
	}
	return newArr;
};

/**
 * @description Empties the array
 * @returns {Array}
 */
extensionArray.clear = function clear() {
	return this.splice(0, this.length);
};

extensionArray.remove = function remove(selector) {
	return pull(this, selector);
};
/**
 *
 * @param {*} selector - Any value searchable, Objects, strings, number, etc
 * @returns {*}
 */
extensionArray.search = function search(selector) {
	return find(this, selector);
};

/**
 * @description Checks to see if the array is empty
 * @returns {boolean}
 */
extensionArray.empty = function empty() {
	return this.length === 0;
};

/**
 * @param {*} selector - Any value searchable, Objects, strings, number, etc.
 * @returns {[*]} - Of matched objects
 */
extensionArray.searchAll = function searchAll(selector) {
	return filter(this, selector);
};

module.exports = extensionArray;
