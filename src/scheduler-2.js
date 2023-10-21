const Patient = require('./patient-2')

class AppointmentScheduler {
    constructor(
        name,
        age,
        gender,
        profession
    ) {
        this.myPatient = new Patient(name, age, gender, profession)
    }

    loadPatientTimetableSync(date) {
        this.timetable = this.myPatient.loadTimetableSync(date)
        return this.timetable
    }

    
    async loadPatientTimetableAsync(date) {
        this.timetable = await this.myPatient.loadTimetableAsync(date)
        return this.timetable
    }
}

module.exports = AppointmentScheduler