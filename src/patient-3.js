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

        this.race = 'not important'
    }

    loadTimetableSync(date) {
        if (date > new Date(2020,10,10,15,40)) {
            return {
                Mo: 'free',
                Tu: 'free',
                We: 'free',
                Th: 'free',
                Fr: 'free',
                Sa: 'free',
                Su: 'free',
            }
        } else {
            return {
                Mo: 'busy',
                Tu: 'busy',
                We: 'busy',
                Th: 'busy',
                Fr: 'busy',
                Sa: 'busy',
                Su: 'busy',
            }
        }
    }

    async loadTimetableAsync(date) {
        if (date > new Date(2020,10,10,15,40)) {
            return Promise.resolve({
                Mo: 'free',
                Tu: 'free',
                We: 'free',
                Th: 'free',
                Fr: 'free',
                Sa: 'free',
                Su: 'free',
            })
        } else {
            return Promise.resolve({
                Mo: 'busy',
                Tu: 'busy',
                We: 'busy',
                Th: 'busy',
                Fr: 'busy',
                Sa: 'busy',
                Su: 'busy',
            })
        }
    }


}

module.exports = Patient