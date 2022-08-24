// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'What motivated you to conduct this project?',
      },
      {
        type: 'list',
        name: 'License',
        message: 'What is the license for this app?',
        choices: ['MIT', 'Apache'],
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'What steps were required to fully install the project?',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Can you provide the instructions and examples with screenshots?',
      },
      {
        type: 'input',
        name: 'Credits',
        message: 'Can you reveal who and what you used to help you? Please list out your collaborators as well as any third-party assets you used to conduct this project.',
      },
      {
        type: 'input',
        name: 'Features',
        message: 'What features does your project provide?',
      },
      {
        type: 'input',
        name: 'Contribute',
        message: 'Include guidelines that explain how other developers can contribute to your project.',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'Please run tests and provide examples to show how the user should run your application',
      },
      {
        type: 'input',
        name: 'ghUserName',
        message: 'Enter Github Username.',
      },
      {
        type: 'input',
        name: 'Email',
        message: 'Enter Email Address.',
      },
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve,reject) => {
        fs.writeFile(fileName,data,e=> {
            if(e){
                reject(e);
                return;
            }
            resolve({
                ok: true
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (function (response){
        let data=generateMarkdown(response);
        writeToFile("sampleReadMe.md",data);
    
    })
}

// Function call to initialize app
init();


module.exports = questions;
