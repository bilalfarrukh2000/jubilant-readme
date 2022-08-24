const fs = require('fs');
const index=require('../index.js');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if(license==='MIT')
    badge='![badge](https://www.channelfutures.com/files/2017/04/3_0.png)'
  else if(license==='Apache')
    badge='![badge](https://media-exp1.licdn.com/dms/image/C4D12AQG4iOEV4ytsKg/article-cover_image-shrink_720_1280/0/1633953703308?e=2147483647&v=beta&t=zHRGYnZU2Xf30Bo4_ewpm9gpLSUjaa6rK94jdPn_1vQ)'

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  if(license==='MIT')
    link='https://choosealicense.com/licenses/mit';
  else if(license==='Apache')
   link='https://www.apache.org/licenses/LICENSE-2.0';

  return link;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  ## Description:

  ${data.Description}

  ## Table of Contents:
  ###  [Installation](#installation)
  ###  [Usage](#usage)
  ###  [Credits](#credits)
  ###  [Features](#features)
  ###  [Contribution Guidelines](#contribution-guidelines)
  ###  [Tests](#Tests)
  ###  [License](#License)
  ###  [Questions](#Questions)

 

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Credits
  ${data.Credits}

  ## Features
  ${data.Features}

  ## Contribution Guidelines
  ${data.Contribute}

  ## Tests
  ${data.Tests}

  ## License
  ### This application uses the ${data.License} license
  ### ${renderLicenseBadge(data.License)}
  ### Link: ${renderLicenseLink(data.License)};


  ## Questions
  ### Please reach out for any questions at:
  ### Github: https://github.com/${data.ghUserName}
  ### or
  ### Email: ${data.Email}

`;
}

module.exports = generateMarkdown;