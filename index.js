// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions =[
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Add a project description.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How is the app used?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license is being used?',
        name: 'license', 
        choices: ['MIT', 'APACHE', 'GNU', 'No License']
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'tests',
    },   
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'Username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFileSync(fileName, data);
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        console.log(data);
        writeToFile('README.md', generateMarkdown(data));
    }) 
    
}



// Function call to initialize app
init();
