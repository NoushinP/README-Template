function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license.replace(' ', '_')}-blue.svg)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}






function generateMarkdown(data) {
  return `# ${data.title}


  # Table of Contents
  ${data.tableOfContents}

  ## Table of Contents

  # Description
  ${data.description}


* [Installation](#installation)

## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`


## Usage
${data.usage}

  * [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)


${renderLicenseSection(data.license)}

  # License
  ${data.license}
  ${renderLicenseBadge(data.license)}

  # Contributing
  ${data.contributing}

  ## Contributing

  ## Tests
  To run tests, run the following command:
  \`\`\`
${data.test}
\`\`\`

* [Tests](#tests)

* [Questions](#questions)

## Questions
If you have any questions contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}]

  # GitHub
  ${data.github}

  # LinkedIn
  ${data.linkedin}

`;
}

module.exports = generateMarkdown; 
