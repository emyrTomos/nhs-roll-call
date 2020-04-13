const BaseRollCallComponent = require('./BaseComponent')
function Login(user){
  BaseRollCallComponent.prototype.constructor.call(this, user)
  this.template = `<div>
					<p>To get started, let us know what your role is</p>
			<div><router-link to="/register/staff" tag="button">Staff</router-link></div>
			<div><router-link to="/register/administrator" tag="button">Administrator</router-link></div>
				</div>`
}

Login.prototype = Object.create(BaseRollCallComponent);
Login.prototype.constructor = Login

module.exports = Login
