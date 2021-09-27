//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "") {
    return "";
  }

  const badges = [
    {
      link: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
      value: "agpl-3.0",
    },
    {
      link: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      value: "gpl-3.0",
    },
    {
      link: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
      value: "lgpl-3.0",
    },
    {
      link: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
      value: "mpl-2.0",
    },
    {
      link: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      value: "apache-2.0",
    },
    {
      link: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      value: "mit",
    },
    {
      link: "[![License: BSL1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
      value: "bsl-1.0",
    },
    {
      link: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
      value: "unlicensname",
    },
  ];

  const badge = badges.filter((b) => b.value === license);
  return badge[0].link;
}

//Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `(https://choosealicense.com/licenses/${license}/)`;
}

//Create a function that returns the license section of README
// If there is no license, return an empty string

function getLicenseName(license) {
  let licenseName = "";
  if (license === "agpl-3.0") licenseName = "GNU AGPLv3";
  if (license === "gpl-3.0") licenseName = "GNU GPLv3";
  if (license === "lgpl-3.0") licenseName = "GNU LGPLv3";
  if (license === "mpl-2.0") licenseName = "Mozilla Public License 2.0";
  if (license === "apache-2.0") licenseName = "Apache License 2.0";
  if (license === "mit") licenseName = "MIT License";
  if (license === "bsl-1.0") licenseName = "Boost Software License 1.0";
  if (license === "unlicense") licenseName = "The Unlicense";

  return licenseName;
}

function renderLicenseSection(license, email) {
  if (license === "") {
    return "";
  }
  const licenseName = getLicenseName(license);

  return `
## License\n
Code released under the ${licenseName} [License]${renderLicenseLink(license)}. 
for additional questions please feel free to contact us via email at ${email}`;
}

//Render section
function renderSection(sectionTitle, data) {
  if (!data) return "";
  return `
## ${sectionTitle}\n
${data}
  `;
}

function renderSectionQuestions(data, githubUsername) {
  if (!data) return "";

  return `
## Questions\n
${data}\n
checkout the [GitHub profile](https://github.com/${githubUsername})
`;
}

//renden the table of Content
function renderTableOfContent(data) {
  let temp = "## Table of Contents\n";
  if (data.installation) temp += `* [Installation](#installation)\n`;
  if (data.usage) temp += `* [Usage](#usage)\n`;
  if (data.contributing) temp += `* [Credits](#credits)\n`;
  if (data.tests) temp += `* [Tests](#tests)\n`;
  if (data.questions) temp += `* [Questions](#questions)\n`;
  if (data.license) temp += `* [License](#license)\n`;

  return temp;
}

//Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  const {
    username,
    email,
    title,
    description,
    installation,
    usage,
    contributing,
    questions,
    license,
    tests,
  } = data;
  return `
# ${title}
${renderLicenseBadge(license)}\n
## Description\n
${description}\n
${renderTableOfContent(data)}
${renderSection("Installation", installation)}\n
${renderSection("Usage", usage)}\n
${renderSection("Contributing", contributing)}\n
${renderSection("Tests", tests)}\n
${renderSectionQuestions(questions, username)}\n
${renderLicenseSection(license, email)}
`;
}

module.exports = generateMarkdown;
