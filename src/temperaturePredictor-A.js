async function temperaturePredictor(session) {
    let sessionCoeffiecient
    switch (session) {
        case 'spring':
            sessionCoeffiecient = 1.1
            break
        case 'summer':
            sessionCoeffiecient = 1.35
            break
        case 'fall':
            sessionCoeffiecient = 1.2
            break
        case 'winter':
            sessionCoeffiecient = 1.12
            break
        default:
            sessionCoeffiecient = 1
    }
    const lastTemperature = await lastYearTemperature(new Date())
    return sessionCoeffiecient * lastTemperature
}

async function lastYearTemperature(date) {
    return Promise.resolve(Math.min(date.getTime()*Math.random(), 38))
}

module.exports = {
    temperaturePredictor,
    lastYearTemperature
}