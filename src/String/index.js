const { startCase, camelCase, escape } = require('lodash');

const { assignExtensions } = require('./../merger');

const newString = {};

/**
 * Insert appropriate commas into a string of numbers
 * @returns {string}
 */
newString.numberize = function numberize() {
	return this.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Capitalize the first letter in every word of the string (good for names)
 * @returns {string}
 */
newString.startCase = function startcase() {
	return startCase(this);
};

/**
 * Turn a string into a camelCase string
 * @returns {string}
 */
newString.camelCase = function camelcase() {
	return camelCase(this);
};

/**
 * Turn the string to an HTML safe escape string
 * @returns {string} The HTML escaped string
 */
newString.HTMLescape = function HTMLescape() {
	return escape(this);
};

assignExtensions(String.prototype, newString);
