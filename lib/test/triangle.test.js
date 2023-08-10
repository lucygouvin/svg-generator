const Triangle = require("../triangle")

describe('Triangle', ()=>{
    // Check the functionality of the Triangle render method. It should return the string controlling the placement and color of the shape. It should work with color keywords and hexcodes.
    describe('render', () =>{
        // Test checks to see that the string color styles are correctly applied
        it("should return a string for a triangle SVG file colored chartruese", ()=>{
            const triangle = new Triangle();
            triangle.setColor("chartreuse");
            expect(triangle.render()).toEqual(`<polygon points = "0, 200 300, 200 150, 0" fill="chartreuse"/>`)
        })
        // Test checks to see that hex code colors are correctly applied
        it("should return a string for a triangle SVG file colored #FFA500", ()=>{
            const triangle = new Triangle();
            triangle.setColor("#FFA500");
            expect(triangle.render()).toEqual(`<polygon points = "0, 200 300, 200 150, 0" fill="#FFA500"/>`)
        })

    })
})