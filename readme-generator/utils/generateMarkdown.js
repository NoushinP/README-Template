// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents
  ${data.tableOfContents}

  # Description
  ${data.description}

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # License
  ${data.license}

  # Contributing
  ${data.contributing}

  # Tests
  ${data.tests}

  # Questions
  ${data.questions}

  # GitHub
  ${data.github}

  # LinkedIn
  ${data.linkedin}

`;
}

module.exports = generateMarkdown; //exports to index.js