const BaseRollCallComponent = require('./BaseComponent')
function Login(user){
  BaseRollCallComponent.prototype.constructor.call(this, user)
  this.template = `
						<div>
							<p>Enter your NHS Id number and password to login securely</p>
							<div><input type="text" name="nhs_id"  placeholder="NHS ID Number" /></div>
							<div><input type="password" name="password"   placeholder="Password" /></div>
							<router-link to="/staff" tag="button">Enter</router-link>
						</div>`
}

Login.prototype = Object.create(BaseRollCallComponent);
Login.prototype.constructor = Login

module.exports = Login
