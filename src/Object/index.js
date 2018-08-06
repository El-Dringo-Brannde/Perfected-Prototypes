const merger = require('./../merger')
const chalk = require('chalk')
const log = function(log) { return console.log(chalk.red(log)) }

const newObject = {};

newObject.safeD = function(dereference) {
   const objectDerefs = dereference.split('.')

   let lastDeref = this
   let badDereference = objectDerefs.some(deref => {
      console.log(deref)
      const arrayCheck = deref.match(/\[(.*?)\]/g).map(b => b.replace(/\[(|(.*?)\)/g, "$1"))

      // if there is array dereferencing and it's false
      if (arrayCheck && !lastDeref[arrayCheck[1]])
         return true

      if (!lastDeref[deref])
         return true
      else {
         lastDeref = lastDeref[deref]
         return false
      }
   });

   if (badDereference && objectDerefs.length > 1)
      return false
   else
      return lastDeref
}


merger(Object.prototype, newObject)


// console.log(newObject.safeD('foo'))


// Object.defineProperty(Object.prototype, 'safeD', {
//    value: function(dereference) {
//       console.log(this)
//       return 1
//    },
//    writable: true
// });

// const f = { a: 2 }

// console.log(f.safeD('foo'))