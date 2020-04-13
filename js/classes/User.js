function User(user){
  User.prototype.constructor.call(this, user)
  this.user = user
}

User.prototype = Object.create(Object.prototype);
User.prototype.constructor = User

User.prototype.getHoursForDate = function(date) {
	
}
User.prototype.data = function() {
	return this.user
}
module.exports = User