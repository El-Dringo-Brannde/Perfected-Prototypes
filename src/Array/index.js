const { mergeExtension, mergeGetters } = require('./../merger');

const extensionArray = require('./extensions.js');
const getterArray = require('./getters.js');

mergeExtension(Array.prototype, extensionArray);
mergeGetters(Array.prototype, getterArray);

exports.module = Array;
