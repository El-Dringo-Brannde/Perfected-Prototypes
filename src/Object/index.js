const safeD = require('lodash/get');
const { mergeExtension } = require('./../merger');

const newObject = {};

/**
 * Safely access values within the object and return undefined if value not present
 * @param {string} dereference - The string path trying to dereference on the object
 * @returns {*|undefined} The value being referenced OR undefined
 */
newObject.try = function safe(dereference) {
	return safeD(this, dereference, undefined);
};

/**
 * Check to see if the object is empty and has no values
 * @returns {boolean}
 */
newObject.isEmpty = function isEmpty() {
	return Object.keys(this).length === 0;
};

/**
 * Turn the values of the object into an array
 * @returns {[*]} - The values of the existing object
 */
newObject.toArray = function toArray() {
	return Object.values(this);
};

/**
 * Deep copy an object such that there are no references to the previous one
 * @param {Object} value - The value to clone
 * @returns {Object} - The new object with no references to the original
 */
newObject.deepCopy = function deepCopy() {
	return JSON.parse(JSON.stringify(this));
};

mergeExtension(Object.prototype, newObject);
