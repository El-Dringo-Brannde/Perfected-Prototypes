const find = require('lodash/find');
const filter = require('lodash/filter');
const pull = require('lodash/pull');

const extensionArray = {};

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
	return pull(this, selector);
};

extensionArray.search = function search(selector) {
	return find(this, selector);
};

extensionArray.searchAll = function searchAll(selector) {
	return filter(this, selector);
};

module.exports = extensionArray;
