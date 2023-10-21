const {temperaturePredictor, lastYearTemperature} = require('../src/temperaturePredictor-B')
jest.mock('../src/temperaturePredictor-B')

describe('test of module functions with manual mocks for each', () => {
    it('testing temperature prediction', async () => {
        expect.assertions(1)

        const predictedTemperature = await temperaturePredictor('spring')
        expect(predictedTemperature).toBe(1.1 * 25)
    })

    it('testing last year temp mock', async () => {
        expect.assertions(1)

        const lastTemperature = await lastYearTemperature(new Date())
        expect(lastTemperature).toBe(25)
    })
})