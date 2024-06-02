function renderLicenseBadge(license) {
  const badges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'GPLv3': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'BSD 3-Clause': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
    'None': ''
  };

  return badges[license] || '';
}


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

module.exports = generateMarkdown; 
