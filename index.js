// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [ 

    { type:'input',
      name:'username', 
      message:'What is your GitHub username?',

    },

    {
      type:'input',
      name:'email', 
      message:'What is your email address?',  
    },

    {
      type:'input',
      name:'project', 
      message:'What is your project`s name?',  
    },

    {
      type:'input',
      name:'description',  
      message:'Please write a short description of your project',
      
    },
    
    {
      type:'list',
      name:'license',  
      message:'What kind of License should your project have?',
      choices:["Apache", "CC", "GPLv3", "GPLv2", "MIT", "None"],  
    },

    {
      type:'input',
      name:'dependencies',
      message:'What command should be run to install dependencies?',  
    },

    {
      type:'input',
      name:'test', 
      message:'What command should be run to run tests?',
    },

    {
      type:'input',
      name:'usage',
      message:'What does the user need to know about using the repo?',  
    },

    {
      type:'input',
      name:'contribution',
      message:'What does the user need to know about contributing to the repo?',  
    },

]



// TODO: Create a function to write README file

function writeToFile(fileName, data, err) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};


// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   .then((response) => {
    writeToFile('README.md',generateMarkdown({ ...response }), (err) => {
        if (err) throw err; console.log('Success!')
    });
   }) 
}

// Function call to initialize app
init();
