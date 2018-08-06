const { mergeExtension, mergeGetters } = require('./../merger');

const extensionArray = [];
const getterArray = [];

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

extensionArray.shuffle = function shuffle() {
	const newArr = [].concat(this);
	for (let i = newArr.length - 1; i >= 1; i--) {
		const randEl = Math.floor(Math.random() * i);
		[newArr[i], newArr[randEl]] = [newArr[randEl], newArr[i]];
	}
	return newArr;
};

extensionArray.clear = function clear() {
	return this.splice(0, this.length);
};

extensionArray.remove = function remove(selector) {
	return this.filter(el => el !== selector);
};

mergeExtension(Array.prototype, extensionArray);
mergeGetters(Array.prototype, getterArray);

export default Array;
