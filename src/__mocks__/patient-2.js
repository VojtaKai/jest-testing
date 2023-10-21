const mockLoadTimetableSync = jest.fn().mockReturnValue({
    Mo: 'mocked-response-2',
    Tu: 'mocked-response-2',
    We: 'mocked-response-2',
    Th: 'mocked-response-2',
    Fr: 'mocked-response-2',
    Sa: 'mocked-response-2',
    Su: 'mocked-response-2',
})

const mockLoadTimetableAsync = jest.fn().mockResolvedValue({
    Mo: 'mocked-async-response-2',
    Tu: 'mocked-async-response-2',
    We: 'mocked-async-response-2',
    Th: 'mocked-async-response-2',
    Fr: 'mocked-async-response-2',
    Sa: 'mocked-async-response-2',
    Su: 'mocked-async-response-2',
})

const patientMock = jest.fn().mockImplementation(() => {
    return {
        loadTimetableSync: mockLoadTimetableSync,
        loadTimetableAsync: mockLoadTimetableAsync,
        race: 'white'
    }
})

module.exports = patientMock // default export
module.exports.mockLoadTimetableSync = mockLoadTimetableSync // named export
module.exports.mockLoadTimetableAsync = mockLoadTimetableAsync // named export


// EXPORT ALTERNATIVES

// const patient = module.exports = patientMock // default export
// patient.mockLoadTimetableSync = mockLoadTimetableSync // named export
// patient.mockLoadTimetableAsync = mockLoadTimetableAsync // named export


// exports = module.exports = patientMock // default export
// exports.mockLoadTimetableSync = mockLoadTimetableSync // named export
// exports.mockLoadTimetableAsync = mockLoadTimetableAsync // named export
