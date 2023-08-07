const Shapes = require("./shapes")
class Square extends Shapes {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    const childRender =  `<rect x="0" y="0" width="200" height="200" fill="${this.color}"/>`
    return super.render(childRender)
  }
}

module.exports = Square