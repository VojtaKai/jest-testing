const Patient = require('../src/patient-2')
const AppointmentScheduler = require('../src/scheduler-2')
jest.mock('../src/patient-2')

describe('testing with manual mock', () => {
    beforeEach(() => {
        Patient.mockClear()
        Patient.mockLoadTimetableSync.mockClear()
        Patient.mockLoadTimetableAsync.mockClear()
    })

    it('testing manual mock and sync function', () => {
        const scheduler = new AppointmentScheduler('Vojta', 28, 'M', 'Software developer')
        expect(Patient).toHaveBeenCalled()
        expect(Patient).toHaveBeenCalledTimes(1)

        console.log('race', Patient?.race)
        console.log('race orig', scheduler.myPatient.race)
        console.log('race orig', scheduler.myPatient.race)

        expect(scheduler.myPatient.race).toBe('white')

        const date = new Date()

        const timetable = scheduler.loadPatientTimetableSync(date)

        expect(Patient.mockLoadTimetableSync).toHaveBeenCalled()
        expect(Patient.mockLoadTimetableSync).toHaveBeenCalledTimes(1)
        expect(Patient.mockLoadTimetableSync).toHaveBeenCalledWith(date)
        expect(Patient.mockLoadTimetableSync.mock.calls[0][0]).toEqual(date) // same as toHaveBeenCalledWith
        expect(timetable).toStrictEqual({
            Mo: 'mocked-response-2',
            Tu: 'mocked-response-2',
            We: 'mocked-response-2',
            Th: 'mocked-response-2',
            Fr: 'mocked-response-2',
            Sa: 'mocked-response-2',
            Su: 'mocked-response-2',
        })
    })

    it('testing manual mock and async function', async () => {
        expect.assertions(9)
        const scheduler = new AppointmentScheduler('Vojta', 28, 'M', 'Software developer')
        expect(Patient).toHaveBeenCalled()
        expect(Patient).toHaveBeenCalledTimes(1)

        expect(scheduler.myPatient.race).toBe('white')

        const date = new Date()

        const timetable = await scheduler.loadPatientTimetableAsync(date)

        expect(Patient.mockLoadTimetableAsync).toHaveBeenCalled()
        expect(Patient.mockLoadTimetableAsync).toHaveBeenCalledTimes(1)
        expect(Patient.mockLoadTimetableAsync).toHaveBeenCalledWith(date)
        expect(Patient.mockLoadTimetableAsync).toHaveBeenCalledWith(date)
        expect(Patient.mockLoadTimetableAsync.mock.calls[0][0]).toEqual(date) // same as toHaveBeenCalledWith
        expect(timetable).toStrictEqual({
            Mo: 'mocked-async-response-2',
            Tu: 'mocked-async-response-2',
            We: 'mocked-async-response-2',
            Th: 'mocked-async-response-2',
            Fr: 'mocked-async-response-2',
            Sa: 'mocked-async-response-2',
            Su: 'mocked-async-response-2',
        })
    })
})