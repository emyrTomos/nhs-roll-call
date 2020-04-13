const BaseRollCallComponent = require('./BaseComponent')
function Rota(user){
	const statusTypes = require('../data/status_types')
	console.log("STATUS TYPES: ", statusTypes)
  BaseRollCallComponent.prototype.constructor.call(this, user)
  this.template = `<div><div id="calendar_container"></div><div id="time_selector">
		</div>
		<router-link to="/staff" tag="button">Back</router-link>
		</div>`
  this.mounted = function(){
					const updateDays = function(timesUnavailable) {

					}
					const timesUnavailable = user.timesUnavailable.filter(time => time.reason === "working")
					console.log(timesUnavailable)
					const markCalendar = function(aDate) {
						let retVal = ""
						for (var i = 0; i<timesUnavailable.length; i++)	{					
							console.log("DATE::: ", aDate.getMonth(), aDate.getDate(), " Times::: ", timesUnavailable[i])
							if(aDate.getMonth() === timesUnavailable[i].time.month - 1 && aDate.getDate() === timesUnavailable[i].time.date) {
								retVal = timesUnavailable[i].reason
							}
						}
						return retVal
					}
					const calendar = new dhx.Calendar("calendar_container", 
						{mark: markCalendar}
					)
					console.log("timesUnavailable", timesUnavailable)
					calendar.events.on("Change",function(date, oldDate, click){
/*						const calendar = new dhx.Calendar("calendar_container", 
							{mark: markCalendar}
						)
						
*/						console.log(user)
						let year = date.getFullYear()
						let month = date.getMonth() +1
						let day = date.getDate()
						console.log(year, month, day)
						document.getElementById("time_selector").innerHTML = `<div id="show-date">${date}</div>`
						for (i=0; i<timesUnavailable.length; i++) {

						}
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

  }
}

Rota.prototype = Object.create(BaseRollCallComponent);
Rota.prototype.constructor = Rota

module.exports = Rota