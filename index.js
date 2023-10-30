const inquirer = require('inquirer')
const Questions = require('./files/questions')
const Render = require('./files/render')
const WriteToFile = require('./files/writeToFile')
const FullPageRender = require('./files/fullPageRender')


function askQuestions(){       
inquirer
    .prompt(new Questions().listQuestions())
    .then((name) =>{ 
        // let top = new Render.Render().renderTopofPage();
        // console.log(top);
        // let pageBody = ""
        // (name.shape === 'circle') ? pageBody = new Render.Circle().renderCirc(name.shape, name.color):
        // (name.shape === 'square') ? pageBody = new Render.Square().renderSquare(name.color):
        // pageBody = new Render.Triangle().renderTriangle(name.colour);
        // console.log(pageBody);
        // let text = new Render.Render().renderText(name.text, name.textColour);
        // console.log(text);
        let xps = new FullPageRender().fullPage(name.shape, name.colour, name.text, name.textColour);
        console.log(xps);
        return xps;
        // return new Render.Render().renderPage(name.shape, name.colour, name.text, name.textColour);
    })
    .then((page) => {
        console.log(page);
        new WriteToFile().fileScribe(page);
    })
    .catch((e) => {
        console.log(`Something went wrong ${e}`)
    })
};

askQuestions();
