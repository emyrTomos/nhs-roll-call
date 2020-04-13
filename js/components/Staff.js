const BaseRollCallComponent = require('./BaseComponent')
function Staff(user){
  BaseRollCallComponent.prototype.constructor.call(this, user)
  this.template = `<div>
					<p>Hello {{user.name}}, what would you like to do? </p>
					<p>Role: {{user.resource.resourceType}}
			<div><router-link to="/staff/rota" tag="button">View Rota</router-link></div>
			<div><router-link to="/staff/calendar" tag="button">Update Fitness</router-link></div>
			<div><router-link to="/staff/details" tag="button">Update Details</router-link></div>
				</div>`
}

Staff.prototype = Object.create(BaseRollCallComponent);
Staff.prototype.constructor = Staff

module.exports = Staff
