const safeD = require('lodash/get');
const { mergeExtension } = require('./../merger');

const newObject = {};

newObject.get = function get(dereference) {
	return safeD(this, dereference, false);
};

mergeExtension(Object.prototype, newObject);
