			(function(){
				const statusTypes = require('./js/data/status_types.json')
				const staffTypes = require('./js/data/staff_types.json')
				const user = require('./js/data/user.json')
				const Vue = require('vue')
				const VueRouter = require('vue-router');
				Vue.use(VueRouter)

				const Fetcher = require('./js/classes/Fetcher')
				const components = require('./js/components')
				console.log("Fetcher")
				window.addEventListener('DOMContentLoaded', function(ev) {
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
				const router = new VueRouter({
				  routes // short for `routes: routes`
				})

					var app = new Vue({
						router: router,
						data: {
							message: 'Welcome to the NHS Roll Call app',
							user: user
						}
					}).$mount('#app')



				});
			})()
