const BaseRollCallComponent = require('./BaseComponent')
function Home(user){
	BaseRollCallComponent.prototype.constructor.call(this, user)
	this.template = `
		  <div>
			<div><router-link to="/login" tag="button">Log in</router-link></div>
			<div><router-link to="/register" tag="button">Sign up</router-link></div>
		</div>  
	`
	this.created = function() {
		if (this.user && this.user.name) {
			console.log("Staff types ", this.staffTypes)
			let destination
			if(this.staffTypes[user.resource.resourceType]) {
				destination = "staff"
			} else {
				destination = "administrator"				
			}
			this.$router.push('/' + destination)
		}
	}
}

Home.prototype = Object.create(BaseRollCallComponent);
Home.prototype.constructor = Home

module.exports = Home