function Calendar(Calendar){
  Calendar.prototype.constructor.call(this, Calendar)
  this.Calendar = Calendar
}

Calendar.prototype = Object.create(Object.prototype);
Calendar.prototype.constructor = Calendar

Calendar.prototype.init = function(user) {
	
}
module.exports = Calendar