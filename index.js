const fs = require('fs');
//  inquirer dependency install
const inquirer = require('inquirer');
const path = require("path")

const generateMarkdown = require("./generateMarkdown")

// array of questions for user
const questions = [
        {
            type: 'input',
            name: "Title",
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: "Description",
            message: 'Type a brief description of your project',
        },
        {
            type: 'input',
            name: "Install",
            message: 'How did you install?',
        },
        {
            type: 'input',
            name: "Usage",
            message: 'What is the usage of the repo?',
        },
        {
            type: 'input',
            name: "Contributing",
            message: 'How others can contribute?',
        },
        {
            type: 'input',
            name: "Tests",
            message: 'What command to run test?',
        },
        {
            type: 'list',
            name: "license",
            message: 'Choose a license',
            choices: ["MIT", "APACHE", "GPL"]
        },
        {
            type: 'input',
            name: "username",
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: "email",
            message: 'Enter you email',
        }

        ];


        // // function to write README file
        function writeToFile(fileName, data) {
            return fs.writeFileSync(path.join(process.cwd(), fileName), data)
        }

// // function to initialize program
function init() {
    inquirer.prompt(questions).then(function(res){
        writeToFile("README.md", generateMarkdown({...res}))
    })
}


// // function call to initialize program
init();

