const inquirer = require('inquirer')
const Questions = require('./files/questions')
const WriteToFile = require('./files/writeToFile')
const FullPageRender = require('./files/fullPageRender')


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

askQuestions();
