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

/*					const calendar = new dhx.Calendar("calendar_container");
					calendar.events.on("Change",function(date, oldDate, click){
						console.log(user)
						let year = date.getFullYear()
						let month = date.getMonth() +1
						let day = date.getDate()
						console.log(year, month, day)
						document.getElementById("time_selector").innerHTML = `<div id="show-date">${date}</div>`

						if (!!!user.timesAvailable[year]) {
							user.timesAvailable[year] = {}
						}

						if (!!!user.timesAvailable[year][month]) {
							user.timesAvailable[year][month] = {}
						}

						if (!!!user.timesAvailable[year][month][day]) {
							user.timesAvailable[year][month][day] = []
						}

						const availability = user.timesAvailable[year][month][day]
						let hours = document.createElement('select')
						hours.setAttribute('multiple', 'true')
						hours.setAttribute('size', '24')
						hours.setAttribute('class', 'times')
						const changer = function(ev) {
							const oldDropDown = document.getElementById('change_status')
							if (oldDropDown) {
								oldDropDown.parentNode.removeChild(oldDropDown)
							}
							let dropDown = document.createElement('select')
							dropDown.setAttribute('id', 'change_status')
							dropDown.setAttribute('size', Object.keys(statusTypes).length)
							const result = []
							const selected = ev.srcElement.querySelectorAll('option:checked')
							for(var i = 0; i< selected.length; i++) {
								result.push(selected[i].value)							
							}
							console.log(ev, this, ev.srcElement, selected, result)
							Object.keys(statusTypes).forEach(function(status){
								let option = document.createElement('option')
								option.innerText = statusTypes[status]

								dropDown.appendChild(option)
								option.setAttribute('value', status)
								option.setAttribute('class', status)
								dropDown.appendChild(option)
							})
							dropDown.addEventListener('change', function(ev) {
								console.log('Change ', this, ev)
								for(var i = 0; i< selected.length; i++) {
									availability[selected[i].value] = this.value
									selected[i].setAttribute('class', this.value)
									const displayValue = (parseInt(selected[i].value) + 1)
									selected[i].innerText = displayValue + " : " + statusTypes[this.value]
								}
							})
							document.getElementById("time_selector").appendChild(dropDown)			
						}

						for(let i = 0; i < 24; i++) {
							let option = document.createElement('option')
							if (!!!availability[i]) {
								if (user.defaultAsAvailable) {
									availability[i] = 'available'
								} else {
									availability[i] = 'unavailable'
								}
							}
								option.innerText = (i + 1) + ' : ' + (statusTypes[availability[i]] || 'N/A')
							option.setAttribute('value', i)
							if (availability[i]) {
								option.setAttribute('class', availability[i])
							}
							hours.appendChild(option)
							hours.addEventListener('change', changer)
						}
						document.getElementById("time_selector").appendChild(hours)			
				})
*/


				});
			})()
