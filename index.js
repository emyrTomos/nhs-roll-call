			(function(){
				const statusTypes = require('./js/data/status_types.json')
				const staffTypes = require('./js/data/staff_types.json')
				const user = require('./js/data/user.json')
				const Vue = require('vue')
				const VueRouter = require('vue-router');
				Vue.use(VueRouter)

				const Fetcher = require('./js/classes/Fetcher')
				console.log("Fetcher")
				window.addEventListener('DOMContentLoaded', function(ev) {
				const routes = require('./js/routes')
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
