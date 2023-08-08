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
            logoShape = new Square();
            break;
        case "Circle":
            logoShape = new Circle();
            break;
        case "Triangle":
            logoShape = new Triangle();
            break;
        default:
            throw new Error ("Shape not defined")
    }
    logoShape.setColor(shape_color)
    logoShape.setContent(text, text_color)
    writeFile.writeToFile("./output/logo.svg", logoShape.render())
}

module.exports = {
    renderShape
}