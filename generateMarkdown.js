// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.description}
  ## ${data.installation}
  ## ${data.usage}
  ## ${data.license}
  ![github license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  ## ${data.contributing}
  ## ${data.tests}
  ## ${data.username}
  ![GitHub](http://github.com)
  ## ${data.email}
`;

}

module.exports = generateMarkdown;
