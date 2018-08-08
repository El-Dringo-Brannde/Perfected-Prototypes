const getterArray = {};

getterArray.first = {
	get() {
		return this[0];
	}
};

getterArray.last = {
	get() {
		return this[this.length - 1];
	}
};

module.exports = getterArray;
