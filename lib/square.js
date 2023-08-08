const Shapes = require("./shapes")
class Square extends Shapes {
  constructor() {
    super();
  }
  render() {
    const childRender =  `<rect x="0" y="0" width="${Math.min(this.height, this.width)}" height="${Math.min(this.height, this.width)}" fill="${this.color}"/>`
    return super.render(childRender)
  }
}

module.exports = Square