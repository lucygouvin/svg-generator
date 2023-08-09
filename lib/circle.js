const Shapes = require("./shapes")
class Circle extends Shapes {
  constructor() {
    super();
    this.width = 200;
  }
  render() {
    return `<circle cx="${this.width/2}" cy="${this.height/2}" r="${this.width/2}"  fill="${this.color}"/>`
  }
}

module.exports = Circle