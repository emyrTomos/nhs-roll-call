			(function(){
				const statusTypes = require('./js/status_types.json')
				console.log(statusTypes)
				const user = require('./js/user.json')
				const Vue = require('vue')
				const Fetcher = require('./js/classes/Fetcher')
				console.log("Fetcher")
				const calendar = new dhx.Calendar("calendar_container");
/*				const user = {
					name: "Jane Doe",
					nhsID : "",
					defaultAsAvailable: false,
					resource: {
						type: "General medcine",
						validated: true
					},
					location: "Postcode",
					reachableLocations: [
						"Postcode", "Postcode", "Postcode"
					],
					timesAvailable: {
					}
					timesUnvailable: {
					}
				}
*/				calendar.events.on("Change",function(date, oldDate, click){
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



				});
			})()
