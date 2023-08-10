# svg-generator

## Description

This project automatically creates an SVG logo based on color and text information provided by the user. It can create three different shapes: circle, triangle, and square. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)

## Installation

Run "node index.js" from the terminal

## Usage

To use, initiate the app from the terminal. Answer the questions when prompted.
* Colors can either be hexidecimal or string keyword values
* Text can be up to three characters, including letters and numbers. It cannot contain emojis.
After questions are answered, an SVG file matching those requirements will render and be saved to the output folder. 

To see examples of logo SVGs, see the examples directory in this repository.  
Walkthrough video: https://drive.google.com/file/d/1iy6gwqwZQ4-qNCghN2ZYQfSZ-t1afl6a/view

## Credits
I used a couple tutorials and articles for help creating the regular expressions used in the validation functions

[RegEx for determining if a string contains an emoji](https://www.stefanjudis.com/snippets/how-to-detect-emojis-in-javascript-strings/#:~:text=When%20you%20enable%20Unicode%20mode,%2C%20you%20guessed%20it%2C%20Emojis!)

[Regex for determining if a string is a valid hex code](https://linuxhint.com/check-if-string-is-hex-in-javascript/)

[Regex for determining if a string contains numbers](https://codingbeautydev.com/blog/javascript-check-if-string-contains-numbers/)

[Regex for removing spaces from a string](https://www.geeksforgeeks.org/how-to-remove-spaces-from-a-string-using-javascript/#)


## License

Please see the license included in this repository.


## Tests

Run "npm test" from the terminal