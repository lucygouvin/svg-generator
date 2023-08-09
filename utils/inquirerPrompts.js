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
    default: "black",
    validate: validateColor,
    filter: filterColor,
  },
  {
    type: "input",
    message: "Enter text (up to 3 characters): ",
    name: "text",
    validate: validateText,
  },
  {
    type: "input",
    message: "Enter text color: ",
    name: "text_color",
    default:"white",
    validate: validateColor,
    filter: filterColor
  },
];

function askQuestions() {
  inquirer
  .prompt(questions)
  .then((response) => {
   console.log(response)
    renderShape.renderShape(response)
  } )
  .catch((error) => console.log(error));
}
function filterColor(input) {
  return new Promise((resolve, reject) => {
    if (input.includes("#") || /\d/.test(input)) {
      if (input[0] != "#") {
        input = "#" + input;
      }
    } else {
      input = input.replace(/ /g, "");
    }
    resolve(input)
  });
}
function validateColor(input){
  return new Promise((resolve, reject) => {
    // If the user input something, we can test to see if it's a valid hex code
    if (input) {
      // Check to see if it has a # or numbers, indicating it could be a hexcode
      if (input.includes("#") || /\d/.test(input)) {
        if (validateHexColor(input)) {
          resolve(true);
        } else {
          reject(false);
        }
      } else {
        resolve(true);
      }
    }
    // If the color is empty, reject it
    else {
      reject(false);
    }
  });
}

function validateText(input){
  const noEmojiRegex = /\p{Emoji}/u;
return new Promise ((resolve,reject) => {
    if (input.length >3){
      reject (false)
    }else if ( noEmojiRegex.test(input)) {
      reject(false)
    }else{
      resolve(true)
    }
  })
}

function validateHexColor(hexInput){
  // remove the # if there is one
  const hex = hexInput.slice(-6);
  const hexRegEx = /[0-9A-Fa-f]{6}/g;
  return (hex.match(hexRegEx))
}

module.exports = { askQuestions, validateHexColor, validateText, validateColor };

function init() {
console.log(validateText("abcde"))
}

init()