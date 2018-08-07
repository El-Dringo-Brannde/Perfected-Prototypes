const start = require('lodash/startCase');
const camel = require('lodash/camelCase');

const { assignExtensions } = require('./../merger');

const newString = {};

newString.numberize = function numberize() {
	return this.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

newString.startCase = function startCase() {
	return start(this);
};

newString.camelCase = function camelCase() {
	return camel(this);
};
assignExtensions(String.prototype, newString);
