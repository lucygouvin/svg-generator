const fs = require("fs/promises");

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data)
    .then(console.log("Generated logo.svg"))
    .catch((error) => {
      console.log(error);
    });
}

module.exports = {
  writeToFile,
};
