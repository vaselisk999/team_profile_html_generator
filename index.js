const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt([
    {
        type: 'input',
        message: 'What is manager name?',
        name: 'username',
    },
    {
        type: 'password',
        message: 'What is manager ID?',
        name: 'password',
    },
    {
        type: 'password',
        message: 'What is manager Email address?',
        name: 'confirm',
    },
    {
        type: 'password',
        message: 'What is manager Office number?',
        name: 'confirm',
    },
]).then(response => {
    // populate manager info
    // promptForNexEmployee ()
})

const promptForNextEmployee = () => {
    inquirer.prompt([{
        type: 'list',
        message: 'Do you whant to add another Employee?',
        name: 'confirm',
        choices: ["engineer", "intern", "generate the team"],
    }]).then(response => {
        // if engineer
        //    promptForEngineer
        // else if intern
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team
    })
}

const promptForEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is engineer name?',
            name: 'username',
        },
        {
            type: 'password',
            message: 'What is engineer ID?',
            name: 'password',
        },
        {
            type: 'password',
            message: 'What is engineer Email address?',
            name: 'confirm',
        },
        {
            type: 'password',
            message: 'What is engineer GitHub username?',
            name: 'confirm',
        },
    ]).then(response => {
        // add new engineer to employees array
        // promptForNextEmployee
    })
}

const promptForIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is intern name?',
            name: 'username',
        },
        {
            type: 'password',
            message: 'What is intern ID?',
            name: 'password',
        },
        {
            type: 'password',
            message: 'What is intern Email address?',
            name: 'confirm',
        },
        {
            type: 'password',
            message: 'What is intern School?',
            name: 'confirm',
        },
    ]).then(response => {
        // add new intern to employees array
        // promptForNextEmployee
    })
}

const buildPage = () => {
    // render(myArrayOfTeamMembers)
}