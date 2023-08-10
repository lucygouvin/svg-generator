const Shapes = require("./shapes")

class Circle extends Shapes {
  constructor() {
    super();
    // Because circles have equal width and height, override the default Shape width
    this.width = 200;
  }
  render() {
    // Return the part of the SVG string that controls circle placement and color
    return `<circle cx="${this.width/2}" cy="${this.height/2}" r="${this.width/2}"  fill="${this.color}"/>`
  }
}

module.exports = Circle