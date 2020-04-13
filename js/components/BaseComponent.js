const staffTypes = require('../data/staff_types')
console.log('staffTypes', staffTypes)
function BaseRollCallComponent(user, template ){
	this.template = template
	this.data = function(){
		return {
			user: user,
			staffTypes: staffTypes
		}
	}
	this.methods = {
		setField: function(event) {
			this[event.target.name] = event.target.value
			console.log(event, this.user, this)
		},
		continueTo: function(destination) {
			this.user.name = this.forename + ' ' + this.middle_name + ' ' + this.surname
			console.log("Got destination, ", destination)
			this.$router.push('/' + destination)

		},
		userType: function() {
			if(this.staffTypes[user.resource.resourceType]) {
				return "staff"
			}
			return "administrator"
		}
	}
}

module.exports = BaseRollCallComponent