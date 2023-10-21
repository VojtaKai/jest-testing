// const Patient = require('../src/patient-3') // Not needed. Class is not replaced by an automock
const AppointmentScheduler = require('../src/scheduler-3')
jest.mock('../src/patient-3')

// jest.spyOn cannot be used. Spies do not work at all.

describe('Testing using manual mock with ES6 class', () => {
    beforeEach(() => {
        // Patient.mockClear() // Not useful. Original Patient class 
        // is not replaced by mock but another ES6 class 
    })

    it('Testing sync functionality. Spies not supported. Entire class functionality is replaced.', () => {
        const scheduler = new AppointmentScheduler('Vojta', 28, 'M', 'Software developer')

        expect(scheduler.loadPatientTimetableSync(new Date)).toStrictEqual({
            Mo: 'mocked-result',
            Tu: 'mocked-result',
            We: 'mocked-result',
            Th: 'mocked-result',
            Fr: 'mocked-result',
            Sa: 'mocked-result',
            Su: 'mocked-result',
        })

        expect(scheduler.myPatient.race).toBe('white')
        expect(scheduler.myPatient.patientName).toBe('Vojta')
    })

    it('Testing async functionality. Spies not supported. Entire class functionality is replaced.', async () => {
        expect.assertions(3)
        const scheduler = new AppointmentScheduler('Vojta', 28, 'M', 'Software developer')

        expect(await scheduler.loadPatientTimetableAsync(new Date)).toStrictEqual({
            Mo: 'mocked-async-result',
            Tu: 'mocked-async-result',
            We: 'mocked-async-result',
            Th: 'mocked-async-result',
            Fr: 'mocked-async-result',
            Sa: 'mocked-async-result',
            Su: 'mocked-async-result',
        })

        expect(scheduler.myPatient.race).toBe('white')
        expect(scheduler.myPatient.patientName).toBe('Vojta')
    })
})
