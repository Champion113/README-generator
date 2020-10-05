// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  👩‍💻## Description 
   ${data.description}
   📝## Table of Content
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [GitHub](#username)
  7. [Email](#email)
  ## Installation 
   ${data.installation}
  ## Usage 
   ${data.usage}
  ## License 
   ${data.license}
  ![github license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  ## Contributing 
  ${data.contributing}
  ## Tests
   ${data.tests}
  ## Username 
  ${data.username} ![GitHub](http://github.com)
  📧## Email 
  ${data.email} [Best way to Contact me] ${data.contact}
`;

}

module.exports = generateMarkdown;
