// const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

const teamMembers = [];

const managerQuestions = [
    {
        type: 'input',
        message: 'What is the name of your manager?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your managers employee id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your managers email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your managers office number?',
        name: 'office',
    }
]

const nextEmployeeQuestion = [
    {
        type: 'list',
        message: 'Who would you like to add next? (4 employees max)',
        name: 'employee',
        choices: ['Engineer','Intern', 'Done'] ,
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the name of your engineer?',
        name: 'name', 
    },
    {
        type: 'input',
        message: 'What is your engineers employee id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your engineers email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your engineers github?',
        name: 'github',
    }
]

const internQuestions = [
    {
        type: 'input',
        message: 'What is the name of your intern?',
        name: 'name', 
    },
    {
        type: 'input',
        message: 'What is your interns employee id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your interns email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Where did the intern attend school?',
        name: 'school',
    }
]


const askQuestions = () => {
    inquirer
        .prompt(managerQuestions) 
        .then((answers) => {
            console.log(answers);
            const manager = new Manager (answers.name, answers.id, answers.email, answers.office);
            teamMembers.push(manager);
            console.log(manager)
            nextEmployee();
        })
}

const nextEmployee = () => {
    inquirer
        .prompt(nextEmployeeQuestion)
        .then(answers => {
            switch (answers.employee) {
                case 'Engineer':
                    inquirer
                        .prompt(engineerQuestions)
                        .then((answers) => {
                            console.log(answers);
                            const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
                            teamMembers.push(engineer);
                            limitEmployees();
                        })
                    break;
                case 'Intern':
                    inquirer
                        .prompt(internQuestions)
                        .then((answers) => {
                            console.log(answers);
                            const intern = new Intern (answers.name, answers.id, answers.email, answers.school);
                            teamMembers.push(intern);
                            limitEmployees();
                        })
                    break;
                default:
                    // render team
            }
        }) 
}

const limitEmployees = () => {
    while (teamMembers < 6) {
        nextEmployee();
    }
}
    
askQuestions() ;
        


