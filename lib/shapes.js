class Shapes {
  constructor() {
    this.color;
    this.text;
    this.textColor;
    this.width = 300;
    this.height = 200;
    this.fontSize = 60;
    this.textAnchor = "middle";
    this.baseline = "middle";
  }
  
  setColor(colorChoice){
    // If  a value has been provided, set to the color attribute, otherwise log an error. The validity of this string was tested with an Inquirer validator.
    colorChoice ? this.color = colorChoice : console.log("Color choice not found")
  }

  setContent(text, textColor){
    // If  a text value has been provided, set to the text attribute, otherwise log an error. The validity of this string was tested with an Inquirer validator.
    text ? this.text = text : console.log("Text not found");
    // If  a textColor value has been provided, set to the textColor attribute, otherwise log an error. The validity of this string was tested with an Inquirer validator.
    textColor ? this.textColor = textColor : console.log("Text color not found");
  }

  renderSVG() {
    // Return the first part of the SVG string which is common to all shapes
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  }

  renderContent() {
    // Return the part of the SVG string that controls the placement, size, and content of the text
    return `<text x="${this.width/2}" y="${this.height/2}" font-size="${this.fontSize}" text-anchor="${this.textAnchor}" dominant-baseline="${this.baseline}" fill="${this.textColor}">${this.text}</text>`;
  }
  
}

module.exports = Shapes;
