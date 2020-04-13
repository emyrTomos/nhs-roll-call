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
