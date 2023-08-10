const Circle = require("../circle")

describe('Circle', ()=>{
    // Check the functionality of the Circle render method. It should return the string controlling the placement and color of the shape. It should work with color keywords and hexcodes.
    describe('render', () =>{
        // Test checks to see that the string color styles are correctly applied
        it("should return a string for a circle SVG file colored blue", ()=>{
            const circle = new Circle();
            circle.setColor("blue");
            expect(circle.render()).toEqual(`<circle cx="100" cy="100" r="100"  fill="blue"/>`)
        })
        // Test checks to see that hex code colors are correctly applied
        it("should return a string for a circle SVG file colored #800080", ()=>{
            const circle = new Circle();
            circle.setColor("#800080");
            expect(circle.render()).toEqual(`<circle cx="100" cy="100" r="100"  fill="#800080"/>`)
        })

    })
   
})