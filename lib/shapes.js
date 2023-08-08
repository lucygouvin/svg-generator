class Shapes {
  constructor() {
    this.color;
    this.text;
    this.textColor;
    this.width = 200;
    this.height = 200;
    this.fontSize = 60;
    this.textAnchor = "middle";
    this.baseline = "middle";
  }
  
  setColor(colorChoice){
    this.color = colorChoice
  }

  setContent(text, textColor){
    this.text = text;
    this.textColor = textColor
  }

  renderContent() {
    return `<text x="${this.width/2}" y="${this.height/2}" font-size="${this.fontSize}" text-anchor="${this.textAnchor}" dominant-baseline="${this.baseline}" fill="${this.textColor}">${this.text}</text>`;
  }

  render(childRender) {
    if (childRender) {
    return `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
        ${childRender}
        ${this.renderContent()}
        </svg>`;
    } else {
      throw new Error(
        "Child class must run and pass the results of the render() method first"
      );
    }
  }
}

module.exports = Shapes;
