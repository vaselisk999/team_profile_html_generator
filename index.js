const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// not in use
const OUTPUT_DIR = path.resolve(__dirname, "/output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
//employees array
const employeesArray = [];

//Manager prompt
inquirer.prompt([
    {
        type: 'input',
        message: 'What is manager name?',
        name: 'manager_name',
    },
    {
        type: 'input',
        message: 'What is manager ID?',
        name: 'manager_ID',
    },
    {
        type: 'input',
        message: 'What is manager Email address?',
        name: 'manager_email',
    },
    {
        type: 'input',
        message: 'What is manager Office number?',
        name: 'manager_num',
    },
]).then(({manager_name, manager_ID, manager_email, manager_num}) => {
    employeesArray.push(new Manager(manager_name, manager_ID, manager_email, manager_num));
    promptForNextEmployee();
});

//Next Employee prompt
const promptForNextEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Do you whant to add another Employee?',
            name: 'choice',
            choices: ["engineer", "intern", "generate the team"],
        }
    ]).then(response => {
        if (response.choice === "engineer") {
            promptForEngineer();
        } else if (response.choice === "intern") {
            promptForIntern();
        } else {
            buildPage();
        }
    })
}

//Engineer prompt
const promptForEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is engineer name?',
            name: 'engineer_name',
        },
        {
            type: 'input',
            message: 'What is engineer ID?',
            name: 'engineer_ID',
        },
        {
            type: 'input',
            message: 'What is engineer Email address?',
            name: 'engineer_email',
        },
        {
            type: 'input',
            message: 'What is engineer GitHub username?',
            name: 'engineer_github',
        },
    ]).then(({engineer_name, engineer_ID, engineer_email, engineer_github}) => {
        employeesArray.push(new Engineer(engineer_name, engineer_ID, engineer_email, engineer_github));
        promptForNextEmployee();
    })
}

//Intern prompt
const promptForIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is intern name?',
            name: 'intern_name',
        },
        {
            type: 'input',
            message: 'What is intern ID?',
            name: 'intern_ID',
        },
        {
            type: 'input',
            message: 'What is intern Email address?',
            name: 'intern_email',
        },
        {
            type: 'input',
            message: 'What is intern School?',
            name: 'intern_school',
        },
    ]).then(({intern_name, intern_ID, intern_email, intern_school})=> {
        employeesArray.push(new Intern(intern_name, intern_ID, intern_email, intern_school));
        promptForNextEmployee();
    })
}

// Builds html file
const buildPage = () => {
    fs.writeFile(__dirname + "/output/team.html", render(employeesArray), (err) => err ? console.error(err) : console.log('Team generated'));
}