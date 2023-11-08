// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    // Replace 'License' with the actual license type you support
    return `![Github license](https://img.shields.io/badge/License-${license}-brightgreen)`;
  }
  return '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Webpage Output](#screenshot)
  - [Deployed Application URL](#link)
  - [Features](#features)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Questions](#questions)

  ## Description
  ${data.description}
  
  ## Webpage Output
  ![alt-text](${data.screenshot})

  ## Deployed Application URL 
  ${data.link}
  
  ## Features 
  ${data.features}

  ## How to use this Application:
  ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} license. ${renderLicenseLink(data.license)}
  
  ## Contributors
  ${data.contribution}

  ## Questions
  GitHub: [${data.github}](https://github.com/${data.github})  
  For any questions, please contact me at ${data.email}.

`
}

module.exports = generateMarkdown;
