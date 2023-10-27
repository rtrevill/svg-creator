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
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please write some text (max 3 letters)'
    }
    ])
    .then((name) =>{ 
        console.log(name);
        return new fullPackage().renderPage(name.shape, name.colour, name.text);
    })
    .catch((e) => {
        console.log(`Something went wrong ${e}`)
    })
};

renderPage(shape, colour, text){
    let pageBody = "";
    if (shape === ""||colour === ""){
        return `Please enter proper data`
    }
    else if (shape === 'circle'){
        pageBody = 
        `<html>
            <body>

            <h1>My first SVG</h1>

            <svg width="100" height="100">
                <${shape} cx="50" cy="50" r="40" stroke="${colour}" stroke-width="4" fill="${colour}" />
                <text x="30" y="50" fill="red" transform="" font-size="3rem">${text}</text>
            </svg>

            </body>
        </html>`
    }
    else if (shape === 'square'){
        pageBody = 
        `<html>
            <body>

            <h1>My first SVG</h1>

                <svg width="400" height="180">
                    <rect x="50" y="20" width="150" height="150"
                    style="fill:${colour};stroke:${colour};stroke-width:5;fill-opacity:1.0;stroke-opacity:0.9" />
                    <text x="30" y="50" fill="red" transform="" font-size="3rem">${text}</text>
                </svg>
            </body>
        </html>`
    }
    else if (shape === 'triangle'){
        pageBody = 
        `<html>
            <body>

            <h1>My first SVG</h1>
                <svg height="210" width="500">
                    <polygon points="20,210 220,210 110,10" style="fill:${colour};stroke:${colour};stroke-width:1" />
                    <text x="30" y="50" fill="red" transform="" font-size="3rem">${text}</text>
                </svg>
            </body>
        </html>`
    }
 
    writeFile('test.html', pageBody)
        .then(() => console.log('Page created successfully'));
    };
}



const answers = new fullPackage().askQuestions();
