const Shapes = require("../shapes");

describe("Shapes", () => {
  // Test setColor method
  describe("setColor", () => {
    // Test with string for color input
    it("should set the object's color property to the value passed to the method", () => {
      const shape = new Shapes();
      shape.setColor("hotpink");
      expect(shape.color).toEqual("hotpink");
    });
    // Test with hexcode for color input
    it("should set the object's color property to the value passed to the method", () => {
      const shape = new Shapes();
      shape.setColor("#7a26aa");
      expect(shape.color).toEqual("#7a26aa");
    });
  });
  // Test setContent method
  describe("setContent", () => {
    // Test with string for color input
    it("should set the text and textColor properties to the values passed to the method", () => {
      const shape = new Shapes();
      shape.setContent("RAT", "brown");
      expect(shape.text).toEqual("RAT");
      expect(shape.textColor).toEqual("brown");
    });
    // Test with hexcode for color input
    it("should set the text and textColor properties to the values passed to the method", () => {
      const shape = new Shapes();
      shape.setContent("CAT", "#0b2f68");
      expect(shape.text).toEqual("CAT");
      expect(shape.textColor).toEqual("#0b2f68");
    });
  });

  // Test that the renderSVG function is returning correctly
  describe("renderSVG", () => {
    it("should return a string for an SVG file", () => {
      const shape = new Shapes();
      expect(shape.renderSVG()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
      );
    });
  });
  // Test that the renderContent function is intaking the text and text color correctly, with color string
  describe("renderContent", () => {
    // Test with string color
    it("should return a string for an SVG file with white text", () => {
      const shape = new Shapes();
      shape.setContent("WOW", "white");
      expect(shape.renderContent()).toEqual(
        `<text x="150" y="100" font-size="60" text-anchor="middle" dominant-baseline="middle" fill="white">WOW</text>`
      );
    });
    // Test with hex color
    it("should return a string for an SVG file with white text", () => {
      const shape = new Shapes();
      shape.setContent("DOG", "#FFFF00");
      expect(shape.renderContent()).toEqual(
        `<text x="150" y="100" font-size="60" text-anchor="middle" dominant-baseline="middle" fill="#FFFF00">DOG</text>`
      );
    });
  });
});
