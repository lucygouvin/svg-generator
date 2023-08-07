const fs = require("fs/promises");

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data)
    .then(console.log("Logo created in output folder!"))
    .catch((error) => {
      console.log(error);
    });
}

module.exports = {
  writeToFile,
};
