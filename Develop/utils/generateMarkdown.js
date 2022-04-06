// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case "Apache":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case  "Mozilla":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case  "GNU":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;

    default:
      return "";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return `https://opensource.org/licenses/Apache-2.0`;
      break;
    case "Mozilla":
      return `https://opensource.org/licenses/MPL-2.0`;
      break;
    case "MIT":
      return `https://opensource.org/licenses/MIT`;
      break;
    case "GNU":
      return `https://www.gnu.org/licenses/gpl-3.0`;
      break;

    default:
      return "";
      break;
  }
}

// description function
function generateDescription(description){
return `## Description
${description}
`
}

function tableOfContents(){
return `## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)`

}

function installInstrucions(Installation){
return `## Installation
${Installation}`
}

function usageTab(Usage){
  return`## Usage
  Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    \`\`\`md
    ![alt text](assets/images/screenshot.png)
    \`\`\`
    `
}

function creditsTab(credits){
  return`## Credits
  ${credits}`
}

function contributionGuidlines(contribute){
  return`## How to Contribute
  ${contribute}`
}

function licenseGuidlines(license){
  return`## License
  ${license}
  ${renderLicenseLink(license)}`
}

function testGuidlines(test){
return`## Tests
${test}`
}

function questionsArea(question, emailProvided){
  return `## Questions
  (https://github.com/${question})
  
  Contact me at this email! ${emailProvided}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data["Project Title"]}

${renderLicenseBadge(data.License)}

${generateDescription(data.Description)}

${tableOfContents(data.Description)}

${installInstrucions(data.Install)}

${usageTab(data.Usage)}

${creditsTab(data.Credits)}

${contributionGuidlines(data.Contributions)}

${licenseGuidlines(data.License)}

${testGuidlines(data.Tests)}

${questionsArea(data.Questions, data.providedEmail)}
`
}




module.exports = {
generateMarkdown: generateMarkdown,
generateDescription: generateDescription,

} 
