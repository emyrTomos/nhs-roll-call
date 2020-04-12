			(function(){
				const statusTypes = require('./js/status_types.json')
				console.log(statusTypes)
				const user = require('./js/user.json')
				const Vue = require('vue')
				const VueRouter = require('vue-router');
				Vue.use(VueRouter)
				const Login = { template: `<div>
					<p>Enter your NHS Id number and password to login securely</p>
					<div><input type="text" name="nhs_id"  placeholder="NHS ID Number" /></div>
					<div><input type="password" name="password"   placeholder="Password" /></div>
					<button>Enter</button>
				</div>` }
				const Register = { template: `<div>
					<p>To get started, let us know what your role is</p>
					<div><input type="text" name="nhs_id" /></div>
					<div><input type="password" name="password" /></div>
					<button>Enter</button>
				</div>` }
				const routes = [
				  { path: '/login', component: Login },
				  { path: '/register', component: Register }
				]

				const router = new VueRouter({
				  routes // short for `routes: routes`
				})

				const Fetcher = require('./js/classes/Fetcher')
				console.log("Fetcher")
				window.addEventListener('DOMContentLoaded', function(ev) {
					var app = new Vue({
						router: router,
						data: {
							message: 'Welcome to the NHS Roll Call app'
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
