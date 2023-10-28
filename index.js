const inquirer = require('inquirer')
const Questions = require('./files/questions')
const Render = require('./files/render')
const WriteToFile = require('./files/writeToFile')

class fullPackage{

askQuestions(){  
     
inquirer
    .prompt(new Questions().listQuestions())
    .then((name) =>{ 
        return new Render().renderPage(name.shape, name.colour, name.text, name.textColour);
    })
    .then((page) => {
        new WriteToFile().fileScribe(page);
        console.log(page);
    })
    .catch((e) => {
        console.log(`Something went wrong ${e}`)
    })
};

// renderPage(shape, colour, text, textColour){
//     let pageBody = "";
//     if (shape === ""||colour === ""){
//         return `Please enter proper data`
//     }
//     else if (shape === 'circle'){
//         pageBody = 
//             `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
//                 <${shape} cx="150" cy="100" r="98" stroke="${colour}" stroke-width="4" fill="${colour}" />
//                 <text x="100" y="120" fill="${textColour}" transform="" font-size="5rem">${text}</text>
//             </svg>`
//     }
//     else if (shape === 'square'){
//         pageBody = 
//                 `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
//                     <rect x="52" y="2" width="198" height="198"
//                     style="fill:${colour};stroke:${colour};stroke-width:5;fill-opacity:1.0;stroke-opacity:0.9" />
//                     <text x="100" y="115" fill="${textColour}" transform="" font-size="5rem">${text}</text>
//                 </svg>`
//     }
//     else if (shape === 'triangle'){
//         pageBody = 
//                 `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">
//                     <polygon points="40,200 260,200 150,10" style="fill:${colour};stroke:${colour};stroke-width:1" />
//                     <text x="70" y="150" fill="${textColour}" transform="" font-size="5rem">${text}</text>
//                 </svg>`
//     }
 
//     writeFile('logo.svg', pageBody)
//         .then(() => console.log('Generated logo.svg'));
//     };
}



const answers = new fullPackage().askQuestions();
