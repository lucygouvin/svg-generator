const Square = require("../lib/square");
const Circle = require("../lib/circle");
const Triangle = require("../lib/triangle");
const writeFile = require("./writeFile");

function renderShape({ shape, shape_color, text, text_color }) {
// Make sure the data was passed and unpacked correctly, if not, throw an error.
  if (shape && shape_color && text && text_color) {
    let logoShape;
    // Create an instance of the shape class that corresponds to the user's choice
    switch (shape) {
      case "Square":
        logoShape = new Square();
        break;
      case "Circle":
        logoShape = new Circle();
        break;
      case "Triangle":
        logoShape = new Triangle();
        break;
      default:
        // I don't think this code is reachable, because the user picks from a list of possible answers. But better safe than sorry.
        throw new Error("Shape not defined");
    }
    // Set the shapeColor, text, and textColor properties of the shape, which will be used in the 3 render functions
    logoShape.setColor(shape_color);
    logoShape.setContent(text, text_color);
    //Pass the concatenated results of the render functions to writeToFile, and output the file in the output folder
    writeFile.writeToFile(
      "./output/logo.svg",
      `${logoShape.renderSVG()} ${logoShape.render()} ${logoShape.renderContent()} </svg> `
    );
  } else {
    throw new Error("Shape attributes not defined");
  }
}

module.exports = {
  renderShape,
};
