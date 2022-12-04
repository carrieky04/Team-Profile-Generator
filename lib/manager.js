const Employee = require('./Employee');

class manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.officeNumber = officeNumber;
        super(name, id, email);
    }

    getRole() {
        return 'Manager';
    }
}

const OutputManager = new manager (`${inquirerManager}`);
OutputManager.getRole;