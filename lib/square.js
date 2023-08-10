const Shapes = require("./shapes")

class Square extends Shapes {
  constructor() {
    super();
    // Because squares have equal width and height, override the default Shape width
    this.width = 200;
  }
  render() {
    // Return the part of the SVG string that controls square placement and color
    return `<rect x="0" y="0" width="${this.width}" height="${this.height}" fill="${this.color}"/>`
  }
}

module.exports = Square