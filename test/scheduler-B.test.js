const Patient = require('../src/patient')
const AppointmentScheduler = require('../src/scheduler')

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
 * Mock implemented with factory function
 */
jest.mock('../src/patient', () => {
    return jest.fn().mockImplementation(() => ({
            loadTimetableSync: mockLoadTimetableSync,
            loadTimetableAsync: mockLoadTimetableAsync
        }))
    }
)

describe('Testing ES6 class mocked with factory function', () => {
    beforeEach(() => {
        Patient.mockClear()
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
