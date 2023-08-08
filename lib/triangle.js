const Shapes = require("./shapes")
class Triangle extends Shapes {
  constructor() {
    super();
    this.baseline = "hanging"
  }
  render() {
    this.width = this.height*(1.5)
    const childRender =  `<polygon points = "0, ${this.height} ${this.width}, ${this.height} ${this.width/2}, 0" fill="${this.color}"/>`
    return super.render(childRender)
  }
}

module.exports = Triangle