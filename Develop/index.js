// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../Develop/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please add a description of your project:',
  },
  {
    type: 'input',
    name: 'screenshot',
    message: 'Please provide the path to the image you want to use as the screenshot.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and/or examples of what you might us this for.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', "Boost1.0", 'None'],
  },
  {
    type: 'input',
    name: 'link',
    message: 'Please add your project URL so any user can access your deployed application.',
  },
  {
    type: 'input',
    name: 'features',
    message: 'Please list any cool features your project might have here.',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please list any contributors by using their github username:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md created successfully!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('./dist/README.md', markdown);
  });
}



// Function call to initialize app
init();

