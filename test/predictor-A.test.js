const {temperaturePredictor, lastYearTemperature} = require('../src/temperaturePredictor-A')

jest.mock('../src/temperaturePredictor-A', () => {
    const originalModule = jest.requireActual('../src/temperaturePredictor-A')
    return {
        __esModule: true,
        ...originalModule,
        lastYearTemperature: jest.fn().mockResolvedValue(25)
    }
})

describe('test of module partial mock', () => {
    /**
     * TemperaturePredictor's original implementation will stay completely intact of mocks introduced in the partial mock!
     * TemperaturePredictor does not use mocked lastYearTemperature function that is called within \
     * Even though the function is mocked by the partial mock above. The lastYearTemperature is only mocked when called directly.
     */
    it('testing temperature prediction', async () => {
        expect.assertions(1)

        const predictedTemperature = await temperaturePredictor('spring')
        expect(predictedTemperature).not.toBe(25 * 1.1) // NOT TO BE!
    })

    it('testing last year temp mock', async () => {
        expect.assertions(1)

        const lastTemperature = await lastYearTemperature(new Date())
        expect(lastTemperature).toBe(25)
    })
})