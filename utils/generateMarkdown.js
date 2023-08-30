// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License' ) {
    return ''
  }
  // create a badge base on the license the user chose
  return `![License](https://img.shields.io/badge/${license}-purple.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  // if(license === 'No License' ){
  //   return ''
  if (license === 'MIT') {
    link = 'https://choosealicense.com/licenses/mit/'
  }else if (license === 'APACHE') {
    link = 'http://www.apache.org/licenses/LICENSE-2.0'
  } else if(license === 'GNU') {
    link = 'https://www.gnu.org/licenses'
  } else {
    link = ''
  }
  
  return link;
 }

 
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if(license === 'No License' ){
    return ''
  }
  return '- [License](#license)'
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
 ### ${renderLicenseLink(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits

${data.contributing}

## Tests

${data.tests}

## Questions
### If you have any questions, you may contact me at either
### Github: https://github.com/${data.Username}
### or
### Email: ${data.email}

`;
}

module.exports = generateMarkdown;
