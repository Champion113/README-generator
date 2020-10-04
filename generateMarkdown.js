// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.username}
  ## ${data.email}
  ![github license](https://img.shields.io/badge/license-${data.license}-blue.svg)
`;
}

module.exports = generateMarkdown;
