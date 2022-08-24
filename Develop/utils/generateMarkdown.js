const fs = require('fs');
const index=require('../index.js');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if(license==='MIT')
    badge='![badge](https://upload.wikimedia.org/wikipedia/commons/c/c3/License_icon-mit.svg)'
  else if(license==='Apache')
    badge='![badge](https://www.opensourcecms.com/wp-content/uploads/apache-license.gif)'

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  if(license==='MIT')
    link='https://opensource.org/licenses/MIT';
  else if(license==='Apache')
   link='https://spdx.org/licenses/Apache-2.0.html';

  return link;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  ## Description

  ${data.Description}

  ## Table of Contents:
  ###  [Installation](#installation-1)
  ###  [Usage](#usage-1)
  ###  [Credits](#credits-1)
  ###  [Features](#features-1)
  ###  [Contribution](#contribution-1)
  ###  [Tests](#tests-1)
  ###  [License](#license-1)
  ###  [Questions](#questions-1)

 

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Credits
  ${data.Credits}

  ## Features
  ${data.Features}

  ## Contribution
  ${data.Contribute}

  ## Tests
  ${data.Tests}

  ## License
  ### The license for this app is ${data.License}
  ### ${renderLicenseBadge(data.License)}
  ### Link for license: ${renderLicenseLink(data.License)};


  ## Questions
  ### Please reach out for any questions at:
  ### Github: https://github.com/${data.ghUserName} or Email: ${data.Email}

`;
}

module.exports = generateMarkdown;