const inquirer = require("inquirer");
const renderShape = require("./renderShape")

const questions = [
  {
    type: "list",
    message: "Select a shape: ",
    choices: ["Square", "Triangle", "Circle"],
    name: "shape",
  },
  {
    type: "input",
    message: "Enter shape color: ",
    name: "shape_color",
    default: "black"
  },
  {
    type: "input",
    message: "Enter text (up to 3 characters): ",
    name: "text",
  },
  {
    type: "input",
    message: "Enter text color: ",
    name: "text_color",
    default:"white"
  },
];

function askQuestions() {
  inquirer
  .prompt(questions)
  .then((response) => {
   
    renderShape.renderShape(response)
  } )
  .catch((error) => console.log(error));
}

module.exports = { askQuestions };
