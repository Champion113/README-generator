const fs = require('fs');
//  inquirer dependency install
const inquirer = require('inquirer');
const path = require("path")

const generateMarkdown = require("./generateMarkdown")

// array of questions for user
const questions = [
        {
            type: 'input',
            name: "title",
            message: 'What is your project title?',
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

