// kindly borrowed from Alex Fernandez to check existing prototype methods

exports.mergeExtension = function(prototype, newExtension) {
	for (var key in newExtension) {
		if (prototype.hasOwnProperty(key)) {
			console.warn(`${key} already exists on ${prototype}`);
			continue;
		} else {
			console.log(key, newExtension[key]);
			Object.defineProperty(prototype, key, {
				value: newExtension[key],
				writable: true
			});
		}
	}
};

exports.assignExtensions = function(originalProto, extension) {
	for (let key in extension) {
		if (originalProto.hasOwnProperty(key)) {
			console.warn(
				`${key} already exists on ${originalProto}, deleting extension`
			);
			delete extension[key];
			continue;
		}
	}
	Object.assign(originalProto, extension);
};

exports.mergeGetters = (prototype, getter) => {
	for (var key in getter) {
		if (prototype.hasOwnProperty(key)) {
			console.warn(`${key} already exists on ${prototype}`);
			continue;
		}
		Object.defineProperty(prototype, key, getter[key]);
	}
};
