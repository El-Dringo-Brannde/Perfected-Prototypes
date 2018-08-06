const merger = require('./../merger')
const safeD = require('lodash/get')

const newObject = {};

newObject.get = function(dereference) {
   return safeD(this, dereference, false)
}


merger(Object.prototype, newObject)