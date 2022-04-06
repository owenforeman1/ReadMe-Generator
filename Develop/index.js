// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [ "Project title?", "Short descitption of project?", "Steps to install project","Usage information?", "What license will you use?", "How to contribute?", "Test instrucions"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Project Title",
        message: "What is your project's title?",
      },
      {
        type: "input",
        name: "Description",
        message:
          "Provide a short description of your project and why you built it?",
      },
      {
        type: "input",
        name: "Install",
        message: "Steps to install your project?",
      },
      {
        type: "input",
        name: "Usage",
        message: "Usage information?",
      },
      {
        type: "input",
        name: "Credits",
        message: "Who helped with this project?",
      },
      {
        type: "input",
        name: "Contributions",
        message: "How can someone contribute to this project?",
      },
      {
        type: "list",
        name: "License",
        message: "Which license do you want to use?",
        choices: ["Apache", "Mozilla", "MIT", "GNU"],
      },
      {
        type: "input",
        name: "Tests",
        message: "Ways to test your project?",
      },
      {
        type: "input",
        name: "Questions",
        message: "Provide Github username?",
      },
      {
        type: "input",
        name: "providedEmail",
        message: "Provide email?",
      },
    ])
    .then((data) => {
      console.log(data);
      console.log(markdown.generateMarkdown(data));
      writeToFile("README.md", markdown.generateMarkdown(data));
    });
}

// Function call to initialize app
init();
