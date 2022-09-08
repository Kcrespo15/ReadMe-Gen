// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const apacheB = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  const mitB = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  const gV3B= '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  const gV2B= '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  const cCB = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
  if( license === 'Apache') {
    return apacheB;
  } 
  else if (license === 'MIT') {
    return mitB;
  }
  else if (license === 'CC') {
    return cCB;
  }
  else if (license === 'GPLv3') {
    return gV3B;
  }
  else if (license === 'GPLv2') {
    return gV2B;
  }
  else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const apacheLink = 'http://www.apache.org/licenses/LICENSE-2.0';
  const mitLink = 'https://www.mit.edu/~amini/LICENSE.md';
  const gV3Link = 'https://www.gnu.org/licenses/gpl-3.0.html';
  const gV2Link = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.html';
  const cCLink = 'https://creativecommons.org/licenses/by/2.0/legalcode';
  if( license === 'Apache') {
    return apacheLink;
  } 
  else if (license === 'MIT') {
    return mitLink;
  }
  else if (license === 'CC') {
    return cCLink;
  }
  else if (license === 'GPLv3') {
    return gV3Link;
  }
  else if (license === 'GPLv2') {
    return gV2Link;
  }
  else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  This application is covered under the ${license}`;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

 ## Description
 ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  The ${data.package} package is required to run this application. Run the following command in the command line to initialize a new package:
  ~~~
  ${data.json}
  ~~~
  Then, run the following command in the command line to install the required package: 
  ~~~
  ${data.install}
  ~~~

  ## Usage
  To run this application, enter the following command in the command line:
  ~~~
  ${data.start}
  ~~~

  \n${data.usage}
  ${renderLicenseSection(data.license)}.
  To view a description of this license type, click [here](${renderLicenseLink(data.license)}).

  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.test}

  ## Questions
  If you have any questions view my GitHub profile at [https://github.com/${data.username}](https://github.com/${data.username}) or contact me at ${data.email}.










`;
}

module.exports = generateMarkdown;
