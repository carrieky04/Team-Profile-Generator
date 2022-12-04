const Employee = require('./Employee');

class intern extends Employee {
    constructor(name, id, email, school) {
        this.school = school;
        super(name, id, email);
    }

    getSchool() {
        console.log(`Intern attends ${this.school}`);
        return this;
    }

    getRole() {
        return 'Intern';
    }
}

const outputIntern = new intern(`${inquirerIntern}`)
outputIntern.getSchool().getRole();