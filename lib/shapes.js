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
    if(colorChoice) {
      this.color = colorChoice;
    }else{
      console.log("Color choice not found")
    }
    
  }

  setContent(text, textColor){
    if(text){
      this.text = text;
    } else{
      console.log("Text not found")
    }
    if(textColor){
      this.textColor = textColor
    }else{
      console.log("Text color not found")
    }
    
  }

  renderContent() {
    return `<text x="${this.width/2}" y="${this.height/2}" font-size="${this.fontSize}" text-anchor="${this.textAnchor}" dominant-baseline="${this.baseline}" fill="${this.textColor}">${this.text}</text>`;
  }

  renderSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  }
}

module.exports = Shapes;
