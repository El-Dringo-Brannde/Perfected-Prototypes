// kindly borrowed from Alex Fernandez to check existing prototype methods

module.exports = function(prototype, newExtension) {
   for (var key in newExtension) {
      if (prototype.hasOwnProperty(key)) {
         continue;
      }
      Object.defineProperty(prototype, key, {
         value: newExtension[key],
         writable: true,
      });
   }
};