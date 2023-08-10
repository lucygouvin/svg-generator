const inquirer = require("inquirer");
const renderShape = require("./renderShape")

// Array of questions for Inquirer
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
    validate: validateColor,
    filter: filterColor
  },
];

// Prompt user to answer the questions above
function askQuestions() {
  inquirer
  .prompt(questions)
  // After the questions have been answered, pass the response to the renderShape function
  .then((response) => renderShape.renderShape(response))
  .catch((error) => console.log(error));
}


// HELPER FUNCTIONS
// Validation Functions

// Check to see if the user has entered a valid color response
function validateColor(input){
  return new Promise((resolve, reject) => {
    // Check if the user input anything
    if (input) {
      // Check to see if it has a # or numbers, indicating it could be a hexcode
      if (input.includes("#") || /\d/.test(input)) {
        // If it may be a hexcode, we can check to see if it is a valid hexcode
        validateHexColor(input) ? resolve(true) : reject (false);
      } 
      // If the input is not empty, but it doesn't contain numbers or #, it may be a color keyword. I couldn't think of an elegant way to validate the strings, unfortunately.
      else {
        resolve(true);
      }
    }
    // If the user did not supply an answer, reject
    else {
      reject(false);
    }
  });
}

// Check to see if a potential hexcode is valid using regex
function validateHexColor(hexInput){
  // remove the # if there is one by slicing the last 6 characters of the string
  const hex = hexInput.slice(-6);
  // Regex says that the string must only consist of 6 characters that are either 0-9 or A-F (uppercase or lowercase)
  return (hex.match(/[0-9A-Fa-f]{6}/g))
}

// Check to see if the text is fewer than 3 characters long, and does not include emojis
function validateText(input){
return new Promise ((resolve,reject) => {
  // If the input is longer than 3 characters, immediately reject. If not, check to see if it contains emojis. If yes, reject. If no, resolve.
  input.length > 3 ? reject (false) : (/\p{Emoji}/u.test(input) ? reject(false):resolve(true))
  })
}

// Filter Function

// Normalize the color data to maximize chance of it being a valid string for the fill property
function filterColor(input) {
  // This promise will never reject because the data has previously been validated
  return new Promise((resolve, reject) => {
    // If the input appears to be a hex, make sure the first character is #. If it's not, add it.
    if (input.includes("#") || /\d/.test(input)) {
      if (input[0] != "#") {
        input = "#" + input;
      }
    // If it's not a hex, it must be a string. Remove spaces as color keywords must be one word. Capitalization does not matter for the fill property.
    } else {
      input = input.replace(/ /g, "");
    }
    resolve(input)
  });
}

module.exports = { askQuestions };