const Shapes = require("./shapes")
class Triangle extends Shapes {
  constructor() {
    super();
    // Because triangles are narrower at the top, using the default "middle" baseline results in some letters bleeding off the edge. Overriding the default to "hanging" helps mitigate this.
    this.baseline = "hanging"
  }
  render() {
    // Return the part of the SVG string that controls triangle placement and color
    return `<polygon points = "0, ${this.height} ${this.width}, ${this.height} ${this.width/2}, 0" fill="${this.color}"/>`
  }
}

module.exports = Triangle