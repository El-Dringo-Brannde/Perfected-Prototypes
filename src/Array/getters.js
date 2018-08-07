const getterArray = {};

getterArray.first = {
	get() {
		try {
			return this[0];
		} catch (err) {
			throw new Error('expected array');
		}
	}
};

getterArray.last = {
	get() {
		try {
			return this[this.length - 1];
		} catch (err) {
			throw new Error('expected array');
		}
	}
};

module.exports = getterArray;
