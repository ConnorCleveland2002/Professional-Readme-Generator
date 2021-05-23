// This will list all the of the packages to be used in the readme generator
const inquirer = require('inquirer');
const fs = require('fs');
const gener = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project',
            message: 'Project Name:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Project License:',
            choices: ['MIT', 'GPLv3', 'Apache 2.0', 'No License']
        },
        {
            type: 'input',
            name: 'description',
            message: 'Project Description:',
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Project Installation Instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Project Usage:',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Project Contributors:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Project Tests:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Github Username:',
        },
        {
            type: 'input',
            name: 'githublink',
            message: 'Github URL:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email Address:',
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`${data.project}README.md`, gener.generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then((data) => writeToFile(data))
        .then(() => console.log("Successfully created!"))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
