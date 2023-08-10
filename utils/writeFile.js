const fs = require("fs/promises");

// Take in file path and file contents, and save the new file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data)
    // Log success message if it worked
    .then(console.log("Generated logo.svg"))
    // Log an error if it didn't work
    .catch((error) => {
      console.log(error);
    });
}

module.exports = {
  writeToFile,
};
