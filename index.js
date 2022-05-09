// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
// const questions = [];

function promptUser() {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'applicationTitle',
            message: 'Type in your application title?'
        },
        {
            type: 'input',
            name: 'appDescription',
            message: 'Add in a description of your application.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps needed to install your application'
        },
        {
            type: 'input',
            name: 'useDescription',
            message: 'Provide instructions on how to use the application.'
        },
        {
            type: 'input',
            name: 'applicationTitle',
            message: 'Type in your application title?'
        },
        {
            type: 'input',
            name: 'contributorGuidelines',
            message: 'Add in contributor guidelines for open sour additions.'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Add in any test instructions needed for the user.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select license for your application: ',
            choices: [
                {
                    name: 'Apache License 2.0',
                    value: 'Apache'
                },
                {
                    name: 'MIT License',
                    value: 'MIT'
                },
                {
                    name: 'GNU GPLv3',
                    value: 'GPL',
                },
                {
                    name: 'PostgreSQL License',
                    value: 'postgresql'
                },
                {
                   name: 'The Unlicense',
                   value: 'unlicense'  
                }
            ]
        },
        {
            type: 'input',
            name: 'email',
            message: 'Type in your email to have others contact you about your application.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Type in your github profile/username so others can connect.'
        }

    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
