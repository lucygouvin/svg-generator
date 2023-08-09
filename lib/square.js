const Shapes = require("./shapes")
class Square extends Shapes {
  constructor() {
    super();
    this.width = 200;
  }
  render() {
    return `<rect x="0" y="0" width="${this.width}" height="${this.height}" fill="${this.color}"/>`
  }
}

module.exports = Square