const inquirer = require('inquirer')
const Questions = require('./files/questions')
const WriteToFile = require('./files/writeToFile')
const FullPageRender = require('./files/fullPageRender')

// Function to run entire app.
// Begin with running the enquirer npm package, then render the results and write to the file. 

function askQuestions(){       
inquirer
    .prompt(new Questions().listQuestions())
    .then((name) =>{ 
        let page = new FullPageRender().fullPage(name.shape, name.colour, name.text, name.textColour);
        return page;
    })
    .then((page) => {
        new WriteToFile().fileScribe(page);
    })
    .catch((e) => {
        console.log(`Something went wrong ${e}`)
    })
};

// Call the function to run

askQuestions();
