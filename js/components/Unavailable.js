const BaseRollCallComponent = require('./BaseComponent')
function Unavailable(user){
	const statusTypes = require('../data/status_types')
	console.log("STATUS TYPES: ", statusTypes)
  BaseRollCallComponent.prototype.constructor.call(this, user)
  this.template = `<div><div id="calendar_container"></div><div id="time_selector">
		</div><router-link to="/staff" tag="button">Back</router-link></div>`
  this.mounted = function(){
					//const timesUnavailable = JSON.parse(JSON.stringify(user.timesUnavailable.filter(time => time.reason === "working")))
					console.log(user.timesUnavailable)
					const calendarHandler = function(date, oldDate, click){
						console.log(user)
						let year = date.getFullYear()
						let month = date.getMonth() +1
						let day = date.getDate()
						console.log(year, month, day)
						document.getElementById("time_selector").innerHTML = `<div id="show-date">${date}</div>`
						console.log(user.timesUnavailable)
						const unavailable = user.timesUnavailable.filter(function(u) 
							{
								console.log(u.time, u.time.date, day, u.time.month, month)
								return (u.time.date === day && u.time.month === month)
							})
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
								console.log("Status:::: ", typeof status)
								let option = document.createElement('option')
								option.innerText = statusTypes[status]

								dropDown.appendChild(option)
								option.setAttribute('value', status)
								option.setAttribute('class', status)
								dropDown.appendChild(option)
							})
							dropDown.addEventListener('change', function(ev) {
								console.log('Change ', this, ev, selected)
								const start = selected[0].value
								const duration = selected.length
								for(var i = 0; i< selected.length; i++) {
									selected[i].setAttribute('class', this.value)
									const displayValue = (parseInt(selected[i].value) + 1)
									selected[i].innerText = displayValue + " : " + statusTypes[this.value]
								}
								user.timesUnavailable.push({ 
										time : {
							            date: day,
							            month: month,
							            year: 2020,
							            start: start,
							            duration: duration
							        },
							        reason: this.value
							    })
								console.log(user)
								document.getElementById("calendar_container").innerHTML = ""
								calendar = new dhx.Calendar("calendar_container", {mark: markCalendar})
								calendar.events.on("Change", calendarHandler)

							})
							document.getElementById("time_selector").appendChild(dropDown)			
						}

						for(let i = 0; i < 24; i++) {
							let option = document.createElement('option')
							const availability = unavailable.filter(function(u) {
								console.log("TIME::: ", u.time)
								return (i >= u.time.start && i < (u.time.start + u.time.duration))
							})
							if (availability && availability.length) {
								console.log("AVAILABILITY::: ", availability, availability[0].reason)
								option.innerText = (i + 1) + ' : ' + statusTypes[availability[0].reason]
							}
							 else {
								option.innerText = (i + 1) + ' : ' + statusTypes['available']
							}

							option.setAttribute('value', i)
							if (availability && availability.length) {
								option.setAttribute('class', availability[0].reason)
							}
							hours.appendChild(option)
							hours.addEventListener('change', changer)
						}
						document.getElementById("time_selector").appendChild(hours)			
				}
					const markCalendar = function(aDate) {
						let retVal = ""
						for (var i = 0; i<user.timesUnavailable.length; i++)	{					
							if(aDate.getMonth() === user.timesUnavailable[i].time.month - 1 && aDate.getDate() === user.timesUnavailable[i].time.date) {
								retVal = user.timesUnavailable[i].reason
							}
						}
						return retVal
					}
					let calendar = new dhx.Calendar("calendar_container", 
						{mark: markCalendar}
					)
					calendar.events.on("Change", calendarHandler)

  }
}

Unavailable.prototype = Object.create(BaseRollCallComponent);
Unavailable.prototype.constructor = Unavailable

module.exports = Unavailable