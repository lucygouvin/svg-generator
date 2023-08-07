const fs = require('fs/promises')

const testRender = `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points = "0, 200 200, 200 100, 0" fill="#FF0000"/>

</svg>`
    
function writeToFile(fileName, data){
    fs.writeFile(fileName, data)
    .then(console.log("logo created"))
}

writeToFile("../output/logo.svg", testRender)