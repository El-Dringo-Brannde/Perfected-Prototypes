const safeD = require('lodash/get');
const lodashIsObject = require('lodash/isPlainObject');
const merger = require('lodash/merge');

const { mergeExtension } = require('./../merger');

const newObject = {};
const mainObj = {};

/**
 * Safely access values within the object and return undefined if value not present
 * @param {string} dereference - The string path trying to dereference on the object
 * @returns {*|undefined} The value being referenced OR undefined
 */
newObject.try = function safe(dereference) {
	return safeD(this, dereference, undefined);
};

/**
 * Checks to see if the obj is really an object (not array or function)
 * @param {[*]} potentialObj - The value to determine if an object or not
 * @returns {boolean}
 */
mainObj.isObject = function isObj(potentialObj) {
	return lodashIsObject(potentialObj);
};

/**
 * Check to see if the object is empty and has no values
 * @returns {boolean}
 */
newObject.hasData = function isEmpty() {
	return Object.keys(this).length === 0;
};

/**
 * Merge x objects together, properties are overwritten by passed in order
 * @param {...object} objs - The objects passed in to be merged into the first
 * @returns {object} The new object merged together from the list of sources
 */
newObject.mergeObjects = function merge(...objs) {
	let mergedObj = this;
	objs.forEach(obj => {
		mergedObj = merger(this, obj);
	});
	return mergedObj;
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

/**
 * Loop over each key and value, returning a new object
 * @callback func
 * @param {string} key - the key in the object
 * @param {*} val - the value associated with the key
 * @returns {*} obj - The object returned from modification
 */
newObject.mapOver = function map(func) {
	return Object.entries(this).reduce(
		(prev, [key, val]) => merger(prev, func(key, val)),
		{}
	);
};

/**
 * Loop over each key and value returning undefined
 * @callback func
 * @param {string} key - the key in the object
 * @param {*} val - the value associated with the key
 * @returns {undefined}
 */
newObject.eachKeyValue = function forEach(func) {
	Object.entries(this).map(([key, val]) => func(key, val));
	return undefined;
};

/**
 * Reduce through the object and return the selected value
 * @callback func
 * @param {object} accumulator - The object to accumulate values
 * @param {object} cur - the current value being iterated
 * @returns {*} The value accumulated
 */
newObject.reduce = function reduce(func, accumulator) {
	return Object.entries(this).reduce(
		(prev, [key, val]) => func(prev, [key, val]),
		accumulator
	);
};

mergeExtension(Object.prototype, newObject);
mergeExtension(Object, mainObj);
