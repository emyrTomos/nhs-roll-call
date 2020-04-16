function Fetcher(config){
  Fetcher.prototype.constructor.call(this)
  this.config = config
}

Fetcher.prototype = Object.create(Object.prototype);
Fetcher.prototype.constructor = Fetcher

Fetcher.prototype.create = function(path, user, payload) {
	const method = "POST"
	return user

};

Fetcher.prototype.retieve = function(path, user, payload) {
	const method = "GET"
	return user
};

Fetcher.prototype.update = function(path, user, payload) {
	const method = "PUT"
	return user
};

Fetcher.prototype.delete = function(path, payload) {
	const method = "DELETE"
	return user
};

module.exports = Fetcher