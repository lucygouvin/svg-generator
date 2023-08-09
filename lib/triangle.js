const Shapes = require("./shapes")
class Triangle extends Shapes {
  constructor() {
    super();
    this.baseline = "hanging"
  }
  render() {
    return `<polygon points = "0, ${this.height} ${this.width}, ${this.height} ${this.width/2}, 0" fill="${this.color}"/>`
  }
}

module.exports = Triangle