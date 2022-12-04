const { default: inquirer } = require('inquirer');
const Employee = require('./Employee');

class engineer extends Employee {
    constructor(name, id, email, github) {
        this.gitHub = github;
        super(name, id, email);
    }

    getGitHub() {
        console.log(`This is employee ${this.gitHub}`)
        return this;
    }

    getRole() {
        return 'Engineer';
    }
}

const outputEngineer = new engineer(`${inquirerEngineer}`)
outputEngineer.getRole().getGitHub();