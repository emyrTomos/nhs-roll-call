function Fetcher(config){
  Fetcher.prototype.constructor.call(this, config)
  this.view = view
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
};

Fetcher.prototype.update = function(path, user, payload) {
	const method = "PUT"
};

Fetcher.prototype.delete = function(path, payload) {
	const method = "DELETE"
};

module.exports = Fetcher