const fs = require('fs');
const inquirer = require('inquirer');

const managerQuestions = [
    {
        type: 'input',
        message: 'What is the name of your manager?',
        name: 'manager',
    },
    {
        type: 'input',
        message: 'What is your managers employee id?',
        name: 'manager-id',
    },
    {
        type: 'input',
        message: 'What is your managers email?',
        name: 'manager-email',
    },
    {
        type: 'input',
        message: 'What is your managers office number?',
        name: 'manager-office',
    }
]

const nextEmployeeQuestion = [
    {
        type: 'list',
        message: 'Who would you like to add next? (5 employees max total)',
        name: 'non-manager',
        choices: ['Engineer','Intern'] ,
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the name of your engineer?',
        name: 'engineer', 
    },
    {
        type: 'input',
        message: 'What is your engineers employee id?',
        name: 'engineer-id',
    },
    {
        type: 'input',
        message: 'What is your engineers email?',
        name: 'engineer-email',
    },
    {
        type: 'input',
        message: 'What is your engineers github?',
        name: 'engineer-github',
    }
]

const internQuestions = [
    {
        type: 'input',
        message: 'What is the name of your intern?',
        name: 'intern', 
    },
    {
        type: 'input',
        message: 'What is your interns employee id?',
        name: 'intern-id',
    },
    {
        type: 'input',
        message: 'What is your interns email?',
        name: 'intern-email',
    },
    {
        type: 'input',
        message: 'Where did the intern attend school?',
        name: 'school',
    }
]

inquirer
    .prompt(managerQuestions) 
    .then((answers) => {
        const htmlPage = generateHTML(answers);

        fs.writeFile('sampleHTML.html', htmlPage, (err) =>
        err ? console.log(err) : console.log('Succesfully created sampleHTML.html')
    );
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log('Prompt could not be rendered in the current environment')
        } else {
            console.log('Something else went wrong')
        }
      })