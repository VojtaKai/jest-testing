const Patient = require('../src/patient')
const AppointmentScheduler = require('../src/scheduler')
jest.mock('../src/patient') // Patient automock

const mockLoadTimetableSync = jest.fn().mockReturnValue({
    Mo: 'mock-result',
    Tu: 'mock-result',
    We: 'mock-result',
    Th: 'mock-result',
    Fr: 'mock-result',
    Sa: 'mock-result',
    Su: 'mock-result'
})

const mockLoadTimetableAsync = jest.fn().mockResolvedValue({
    Mo: 'mock-async-result',
    Tu: 'mock-async-result',
    We: 'mock-async-result',
    Th: 'mock-async-result',
    Fr: 'mock-async-result',
    Sa: 'mock-async-result',
    Su: 'mock-async-result'
}) 

/**
 * Automocking. Spies only allowed.
 */
describe('Testing ES6 classes with automock', () => {
    beforeEach(() => {
        Patient.mockClear()
    })

    it('automatic mock sync', () => {
        const scheduler = new AppointmentScheduler('Vojta', 28, 'M', 'Software developer')
        expect(Patient).toHaveBeenCalled()
        expect(Patient).toHaveBeenCalledTimes(1)

        const date = new Date()

        // return values are not mocked, so we can only test spied values - calls
        scheduler.loadPatientTimetableSync(date)

        const mockPatientInstance = Patient.mock.instances[0]
        expect(mockPatientInstance.loadTimetableSync).toHaveBeenCalledWith(date)
        expect(mockPatientInstance.loadTimetableSync).toHaveBeenCalledTimes(1)
    })

    it('automatic mock async', async () => {
        expect.assertions(4)
        const scheduler = new AppointmentScheduler('Vojta', 28, 'M', 'Software developer')
        expect(Patient).toHaveBeenCalled()
        expect(Patient).toHaveBeenCalledTimes(1)

        const date = new Date()

        // return values are not mocked, so we can only test spied values - calls
        await scheduler.loadPatientTimetableAsync(date)

        const mockPatientInstance = Patient.mock.instances[0]
        expect(mockPatientInstance.loadTimetableAsync).toHaveBeenCalledWith(date)
        expect(mockPatientInstance.loadTimetableAsync).toHaveBeenCalledTimes(1)
    })
})

/**
 * Automocking + mocking mocked methods behavior. Return values + call testing allowed.
 */
describe('Testing ES6 classes with mockImplementation', () => {
    beforeEach(() => {
        Patient.mockClear()
        Patient.mockImplementation(() => {
            return {
                loadTimetableSync: mockLoadTimetableSync,
                loadTimetableAsync: mockLoadTimetableAsync
            }
        })
    })

    it('mockImplementation sync', () => {
        const scheduler = new AppointmentScheduler('Vojta', 28, 'M', 'Software developer')
        expect(Patient).toHaveBeenCalled()
        expect(Patient).toHaveBeenCalledTimes(1)

        const date = new Date()

        // return values ARE mocked and calls are spied
        const timetable = scheduler.loadPatientTimetableSync(date)

        expect(timetable).toStrictEqual({
            Mo: 'mock-result',
            Tu: 'mock-result',
            We: 'mock-result',
            Th: 'mock-result',
            Fr: 'mock-result',
            Sa: 'mock-result',
            Su: 'mock-result'
        })

        expect(mockLoadTimetableSync).toHaveBeenCalledWith(date)
        expect(mockLoadTimetableSync).toHaveBeenCalledTimes(1)
    })

    it('mockImplementation async', async () => {
        expect.assertions(5)

        const scheduler = new AppointmentScheduler('Vojta', 28, 'M', 'Software developer')
        expect(Patient).toHaveBeenCalled()
        expect(Patient).toHaveBeenCalledTimes(1)

        const date = new Date()

        // return values ARE mocked and calls are spied
        const timetable = await scheduler.loadPatientTimetableAsync(date)

        expect(timetable).toStrictEqual({
            Mo: 'mock-async-result',
            Tu: 'mock-async-result',
            We: 'mock-async-result',
            Th: 'mock-async-result',
            Fr: 'mock-async-result',
            Sa: 'mock-async-result',
            Su: 'mock-async-result'
        })

        expect(mockLoadTimetableAsync).toHaveBeenCalledWith(date)
        expect(mockLoadTimetableAsync).toHaveBeenCalledTimes(1)
    })
})
