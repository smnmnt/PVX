const timer = (discount) => {
    const timerDaysBoxF = document.querySelector('.count_1')
    const timerHoursBoxF = document.querySelector('.count_2')
    const timerMinutesBoxF = document.querySelector('.count_3')
    const timerSecondsBoxF = document.querySelector('.count_4')

    const timerDaysBoxL = document.querySelector('.count_1:last')
    const timerHoursBoxL = document.querySelector('.count_2:last')
    const timerMinutesBoxL = document.querySelector('.count_3:last')
    const timerSecondsBoxL = document.querySelector('.count_4:last')
    
    const timerDays = timerDaysBoxF.lastElementChild
    const timerHours = timerHoursBoxF.lastElementChild
    const timerMinutes = timerMinutesBoxF.lastElementChild
    const timerSeconds = timerSecondsBoxF.lastElementChild

    const timerDaysSecondary = timerDaysBoxL.lastElementChild
    const timerHoursSecondary = timerHoursBoxL.lastElementChild
    const timerMinutesSecondary = timerMinutesBoxL.lastElementChild
    const timerSecondsSecondary = timerSecondsBoxL.lastElementChild

    const timeEqualify = () => {
        timerDaysSecondary = timerDays
        timerHoursSecondary = timerHours
        timerMinutesSecondary = timerMinutes
        timerSecondsSecondary = timerSeconds
    }

    let intervalID

    const getTimeRemaining = (discount) => {
        let dateStop = new Date(discount).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor(timeRemaining / 60 / 60) % 24
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return { timeRemaining, days, hours, minutes, seconds }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining(discount)

        timerDays.textContent = getTime.days
        timerHours.textContent = getTime.hours
        timerMinutes.textContent = getTime.minutes
        timerSeconds.textContent = getTime.seconds

        if (getTime.timeRemaining > 0) {
            intervalID = setInterval(() => {
                            updateClock()
                        }, 1000);
        } else if (getTime.timeRemaining < 0) {
            timerDays.textContent = '00'
            timerHours.textContent = '00'
            timerMinutes.textContent = '00'
            timerSeconds.textContent = '00'
            clearInterval(intervalID)
        }
        const zeroToNumber = () => {
            if (getTime.days < 10) {
                timerDays.textContent = '0' + getTime.days
            } 
            if (getTime.hours < 10) {
                timerHours.textContent = '0' + getTime.hours
            }
            if (getTime.minutes < 10) {
                timerMinutes.textContent = '0' + getTime.minutes
            }
            if (getTime.seconds < 10) {
                timerSeconds.textContent = '0' + getTime.seconds
            }
        }
        zeroToNumber()
        time
    }
    updateClock()
}
export default timer