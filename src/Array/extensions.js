const findIndex = require('lodash/findIndex');
const find = require('lodash/find');
const filter = require('lodash/filter');
const nth = require('lodash/nth');
const difference = require('lodash/difference');

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

/**
 * Remove all instances of a value within the array and return new array
 * @param {*} selector - The value trying to match against
 */
extensionArray.remove = function remove(selector) {
	if(selector !== null && typeof selector === 'object'){
        var index = findIndex(this, selector);
        while(index >= 0){
			this.splice(index, 1);
			// To prevent starting from the beginning of the array
        	index = findIndex(this, selector, index);
        }  
    } else{
        var index = this.indexOf(selector);
        while(index >= 0){
            this.splice(index, 1);
            index = this.indexOf(selector, index);
        }  
    }
    return this;
};

/**
 * Remove all instances of a value within the array and return the removed value
 * @param {*} value - The value trying to match against
 */
extensionArray.yank = function yank(value){
    if (value.constructor === Array) {        
        for (let i = 0; i < value.length; i++) {
            if(this.includes(value[i])){ 
               this.remove(value[i]);
            }else{
                // Remove it from the given array so when we return it, it doesnt 
                // return a number that was not removed
                value.remove(value[i]);
            }                
        }
        return value;
    } else if (this.includes(value)) {
        this.remove(value);
        return value;
    } else{
        throw "Value not in the array";
    }
}

/**
 * Get the value of the array by the position of the index
 * @param {number} index - The value being accessed, supports negative indexing
 */
extensionArray.access = function access(index) {
	return nth(this, index);
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
 * Find the difference between two arrays
 * @param {[*]} arr - The array to compare against
 * @returns {[*]} The array of differences between the two.
 */
extensionArray.diff = function diff(arr) {
	return difference(this, arr);
};

/**
 * Check the deep equality of two arrays
 * @param {array} arr - The other array to check the deep comparison of
 * @returns {boolean}
 */
extensionArray.deepEqual = function deepEqual(arr) {
	return JSON.stringify(this) === JSON.stringify(arr);
};

/**
 * Find all instances of Objects in a Array (Powered by 'filter' in Lodash)
 * @param {function|object|array|string} selector - Function:  A truthy function that specifies what your searching for
 * @param {Object} selector - Object:  The object trying to be matched in the array
 * @param {Array} selector - Array: The array of values correlating to what is being matched
 * @param {string} selector - String: The string value trying to match against
 * @returns {[*]} - Array of matched objects
 */
extensionArray.findAllObj = function findAllObj(selector) {
	return filter(this, selector);
};

/**
 * Get the unique values of an array
 * @returns {array} of the unique values
 */
extensionArray.unique = function unique() {
	return [...new Set(this)];
};

module.exports = extensionArray;
