/**
 * Class completely replaces the actuall Patient class
 * No spies allowed
 */
class Patient {
    constructor(
        name,
        age,
        gender,
        profession
    ) {
        this.patientName = name
        this.patientAge = age
        this.patientGender = gender
        this.patientProfession = profession

        this.race = 'white'
    }

    loadTimetableSync() {
        return {
            Mo: 'mocked-result',
            Tu: 'mocked-result',
            We: 'mocked-result',
            Th: 'mocked-result',
            Fr: 'mocked-result',
            Sa: 'mocked-result',
            Su: 'mocked-result',
        }
    }

    async loadTimetableAsync() {
        return Promise.resolve({
            Mo: 'mocked-async-result',
            Tu: 'mocked-async-result',
            We: 'mocked-async-result',
            Th: 'mocked-async-result',
            Fr: 'mocked-async-result',
            Sa: 'mocked-async-result',
            Su: 'mocked-async-result',
        })
    }
}

module.exports = Patient
