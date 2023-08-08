const Shapes = require("./shapes")
class Circle extends Shapes {
  constructor() {
    super();
  }
  render() {
    const childRender =  `<circle cx="${Math.min(this.height, this.width)/2}" cy="${Math.min(this.height, this.width)/2}" r="${Math.min(this.width/2, this.height/2)}"  fill="${this.color}"/>`
    return super.render(childRender)
  }
}

module.exports = Circle