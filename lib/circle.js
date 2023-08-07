const Shapes = require("./shapes")
class Circle extends Shapes {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    const childRender =  `<circle cx="100" cy="100" r="100"  fill="${this.color}"/>`
    return super.render(childRender)
  }
}

module.exports = Circle