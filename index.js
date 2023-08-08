// STRETCH GOALS:
// -more shapes (polygons, heart, star, inverted triangle)
// -rounded corners option
// -set font family
// -set font size/weight/style
// Accept rgb values for color
// custom file name

// TO DO:
// Error handling
// Input verification
// Write test cases
// Adjust text placement or size with triangles


// Application Flow:
// When app starts, inquirer questions should launch
// Asks for : shape, color, text, and text color
// When inquirer is finished, run the write file function, which calls the rendershape function to get its data
// The data should be the corresponding shape's render method
// Writes the file and gives confirmation message when it's done

// Can put the text method in the super class
// shape should also have a render method that throws an error
const inquirerPrompts = require("./utils/inquirerPrompts");

function init (){
    inquirerPrompts.askQuestions()
}

init()