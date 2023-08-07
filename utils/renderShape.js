// import the shape classes to get access to their render methods
// const Shapes = require("../lib/shapes")
const Square = require("../lib/square")
const Circle = require("../lib/circle")
const Triangle = require("../lib/triangle")
const writeFile = require("./writeFile")

// Shape, shape color, text, text color
function renderShape({shape, shape_color, text, text_color}){
    let logoShape;
    switch (shape){
        case "Square":
            logoShape = new Square(shape_color, text, text_color);
            break;
        case "Circle":
            logoShape = new Circle(shape_color, text, text_color);
            break;
        case "Triangle":
            logoShape = new Triangle(shape_color, text, text_color);
            break;
        default:
            throw new Error ("Shape not defined")
    }
    writeFile.writeToFile("./output/logo.svg", logoShape.render())
}

module.exports = {
    renderShape
}