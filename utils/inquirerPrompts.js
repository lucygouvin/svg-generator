const inquirer = require('inquirer')

const questions = [
    {
        type: "input",
        message: "is this thing working?",
        name: "test",
      }
]

function init (){
    inquirer.prompt(questions)
}

init()