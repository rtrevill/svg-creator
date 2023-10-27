const { writeFile } = require('fs/promises');
const inquirer = require('inquirer')

class fullPackage{

askQuestions(){    
inquirer
    .prompt([
        {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: [
            'square',
            'circle',
            'triangle',
        ],
    },
    {
        type: 'input',
        name: 'colour',
        message: 'What colour?'
    }
    ])
    .then((name) =>{ 
        console.log(name);
        return new fullPackage().renderPage(name.shape, name.colour);
    })
    .catch((e) => {
        console.log(`Something went wrong ${e}`)
    })
};

renderPage(shape, colour){
    if (shape === ""||colour === ""){
        return `Please enter proper data`
    }
    else{
        let pageBody = 
        `<html>
            <body>

            <h1>My first SVG</h1>

            <svg width="100" height="100">
                <${shape} cx="50" cy="50" r="40" stroke="${colour}" stroke-width="4" fill="${colour}" />
            </svg>

            </body>
        </html>`
    
    writeFile('test.html', pageBody)
        .then(() => console.log('Page created successfully'));
    };
};

};

const answers = new fullPackage().askQuestions();
