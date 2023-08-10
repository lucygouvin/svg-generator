const inquirerPrompts = require("./utils/inquirerPrompts");

// When the application starts, launch inquirer and collect data from user
function init (){
    inquirerPrompts.askQuestions()
}

init()