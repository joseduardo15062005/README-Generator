//Include packages needed for this application

const inquirer = require("inquirer");
const wirteToFile = require("./utils/fileManager");
const { questions } = require("./utils/data");
const generateMarkdown = require("./utils/generateMarkdown");

//Create a function to initialize app
function init() {
  //Ask for the questions
  inquirer
    .prompt(questions)
    .then((answers) => {
      const data = generateMarkdown(answers);
      const filename = `./dist/README-${answers.title}.md`;
      return wirteToFile(filename, data);
    })
    .then((data) => console.log(data.message))
    .catch((error) => console.log(error));
}

// Function call to initialize app
init();
