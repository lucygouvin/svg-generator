const Shapes = require("./shapes")
class Triangle extends Shapes {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    const childRender =  `<polygon points = "0, 200 200, 200 100, 0" fill="${this.color}"/>`
    return super.render(childRender)
  }
}

module.exports = Triangle