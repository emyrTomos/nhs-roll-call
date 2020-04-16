				const components = require('./components')
				const user = require('./data/user')
				const Home = new components.Home(user)
				const Staff = new components.Staff(user)
				const Administrator = new components.BoilerPlate(user, '<div>Administrator</div>')
				const Login = new components.Login(user)
				const Register = new components.Register(user)
				const Rota = new components.Rota(user)
				const Unavailable = new components.Unavailable(user)
				const RegisterAdministrator = new components.BoilerPlate(user, `
						<div>
							<div><input type="text" name="forename"  placeholder="First name"   v-on:change="setField" /></div>
							<div><input type="text" name="middle_name"  placeholder="Middle name"  v-on:change="setField" /></div>
							<div><input type="text" name="surname"  placeholder="Surname"   v-on:change="setField" /></div>
							<div><input type="text" name="nhs_id"  placeholder="NHS ID Number"   v-on:change="setField" /></div>
							<div><input type="text" name="nhs_trust"  placeholder="NHS Trust"   v-on:change="setField" /></div>
							<button v-on:click="continueTo('administrator')">Continue</button>
						</div>`)
				const RegisterResource = new components.BoilerPlate(user, `
						<div>
							<div><input type="text" name="forename"  placeholder="First name"   v-on:change="setField" /></div>
							<div><input type="text" name="middle_name"  placeholder="Middle name"   v-on:change="setField" /></div>
							<div><input type="text" name="surname"  placeholder="Surname"   v-on:change="setField" /></div>
							<div><input type="text" name="nhs_id"  placeholder="NHS ID Number"   v-on:change="setField" /></div>
							<div><input type="text" name="position"  placeholder="Position"   v-on:change="setField" /></div>
							<div><input type="text" name="nhs_trust"  placeholder="NHS Trust"   v-on:change="setField" /></div>
							<button v-on:click="continueTo('staff')">Continue</button>
						</div>` )

				const routes = [
				  { 
				  	path: '/', component: Home 
				  },
				  { 
				  	path: '/login', component: Login
				  },
				  { path: '/register', component: Register

				   },
				   {
				   		path: '/staff', component: Staff
				   },
				   {
				   		path: '/staff/rota', component: Rota
				   },
				   {
				   		path: '/staff/calendar', component: Unavailable
				   },
				   {
				   		path: '/administrator', component: Administrator
				   },
			        {
			          path: '/register/administrator',
			          component: RegisterAdministrator
			        },
			        {
			          path: '/register/staff',
			          component: RegisterResource
			      	}
				]
module.exports = routes
