// test render method
const Square = require("../square")

describe('Square', ()=>{
    describe('render', () =>{
        // Test checks to see that the string color styles are correctly applied
        it("should return a string for a square SVG file colored hot pink", ()=>{
            const square = new Square();
            square.setColor("hotpink");
            expect(square.render()).toEqual(`<rect x="0" y="0" width="200" height="200" fill="hotpink"/>`
            )
        })
        // Test checks to see that hex code colors are correctly applied
        it("should return a string for a square SVG file colored #51414F", ()=>{
            const square = new Square();
            square.setColor("#51414F");
            expect(square.render()).toEqual(`<rect x="0" y="0" width="200" height="200" fill="#51414F"/>`
            )
        })

    })
})