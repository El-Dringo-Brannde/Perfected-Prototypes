const safeD = require('lodash/get');
const merger = require('lodash/merge');
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
 * Merge x objects together, properties are overwritten by passed in order
 * @param {...object} objs - The objects passed in to be merged into the first
 * @returns {object} The new object merged together from the list of sources
 */
newObject.merge = function merge(...objs) {
	let mergedObj = this;
	objs.forEach(obj => {
		mergedObj = merger(this, obj);
	});
	return mergedObj;
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

/**
 * Check the deep equality between two objects
 * @param {Object} obj - The object to compare equality against
 * @returns {boolean}
 */

newObject.deepEqual = function deepEqual(obj) {
	return JSON.stringify(this) === JSON.stringify(obj);
};

mergeExtension(Object.prototype, newObject);
