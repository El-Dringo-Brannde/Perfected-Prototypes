const rounder = require('lodash/round');
const random = require('lodash/random');

const { mergeExtension } = require('./../merger');

const newNum = {};
const mainNum = {};

/**
 * Round a number to a whole integer or specify decimal places.
 * @param {integer} decimal - The decimal place to round to
 * @return {number}
 */
newNum.round = function round(decimal = 0) {
	return rounder(this, decimal);
};

/**
 * Create a random number
 * @param {number} start - The number value to start from
 * @param {number} stop - The number value to stop at
 * @return {number}
 */
mainNum.random = function randomGen(start, stop) {
	return random(start, stop);
};

mergeExtension(Number, mainNum);
mergeExtension(Number.prototype, newNum);
