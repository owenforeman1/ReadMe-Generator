// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// need license badge at top of page
// license link 
// switch statement
// make table of content links work

// description function
function generateDescription(description){
return `## Description
${description}
`
}

function tableOfContents(){
return `## Table of Contents
- [Installation](#Installation)
- [Contribution](#How to Contribute)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)`

}

function installInstrucions(Installation){
return `## Installation
${Installation}`
}

function contributionGuidlines(contribute){
  return`## How to Contribute
  ${contribute}`
}

function licenseGuidlines(license){
  return`## License
  ${license}`
}

function testGuidlines(test){
return`## Tests
${test}`
}

function questionsArea(question, emailProvided){
  return `## Questions
  [${question}](https://github.com/${question}).
  Contact me at this email![${emailProvided}](mailto:${emailProvided}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("hello");
  return `# ${data["Project Title"]}

${generateDescription(data.Description)}

${tableOfContents(data.Description)}

${installInstrucions(data.Install)}

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
