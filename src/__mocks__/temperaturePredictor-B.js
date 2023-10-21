temperaturePredictor = async (session) => {
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

lastYearTemperature = async (date) => {
    return Promise.resolve(25)
}

module.exports = {
    temperaturePredictor,
    lastYearTemperature
}