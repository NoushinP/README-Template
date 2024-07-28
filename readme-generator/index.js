const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },

  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },

  {
    type: "list",
    name: "tableOfContents",
    message: "Pick your table of contents section",
    choices: ["Introduction", "Sections/Chapters", "Contact Me"],
  },

  {
    type: "checkbox",
    name: "installation",
    message: "what is the installation process?",
    default: "npm i",
    choices: [
      new inquirer.Separator(" = Types = "),
      {
        name: "Direct",
      },
      {
        name: "Parallel",
      },
      {
        name: "Phased",
      },
      {
        name: "Single-location",
      },
    ],
  },

  {
    type: "input",
    name: "usage",
    message: "What is your project used for?",
  },

  {
    type: "input",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Who are you contributing this to?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are you testing in this project?",
    default: 'nmp test'
  },

  {
    type: "input",
    name: "questions",
    message: "Please add your questions here",
  },

  // WHEN I enter my GitHub username
  // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "linkedin",
    message: "What is your LinkedIn link?",
  },
]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating README...');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
  }
  
  init();

// ].then((answers) => {
//   console.log(answers);
//   const htmlPageContent = generateMarkdown(answers);

//   fs.writeFile("READMETEST.md", htmlPageContent, (err) =>
//     err ? console.log(err) : console.log("Successfully created README.md!")
//   );
// });

// function tableOfContents(item) {
//   const content = `- ${item}\n`;
//   fs.appendFileSync(readmePath, content, (err) => {
//     if (err) {
//       console.error("Error writing to README.md:", err);
//     }
//   });
//   console.log(`Added "${item}" to README.md`);
// }
