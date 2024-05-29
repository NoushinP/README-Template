const generateMarkdown = require('./utils/generateMarkdown')  // imports from generatem... .js

const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');


inquirer
    .prompt([

        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },

        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
        },


        // WHEN I click on the links in the Table of Contents
        // THEN I am taken to the corresponding section of the README
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'List your table of contents?',
        },

        {
            type: 'input',
            name: 'installation',
            message: 'what is the installation process?',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'What is your project used for?',
        },


        // WHEN I choose a license for my application from a list of options
        // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
        {
            type: 'input',
            name: 'license',
            message: 'Any licensure?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who are you contributing this to?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are you testing in this project?',
        },

        // WHEN I enter my email address
        // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
        {
            type: 'input',
            name: 'questions',
            message: 'Please add your questions here',
        },

        // WHEN I enter my GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'What is your LinkedIn link?',
        },
    ])
    .then((answers) => {
        console.log(answers)
        const htmlPageContent = generateMarkdown(answers); //making string based on answers 

        fs.writeFile('READMETEST.md', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });