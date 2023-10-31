const {writeFile} = require('fs/promises');

class WriteToFile{
    constructor(pageBody){
        this.pageBody = pageBody;
    }

fileScribe = function(pageBody){
   writeFile('logo.svg', pageBody)
    .then(console.log('Generated logo.svg'))
    .catch((e) => {
        console.log(`Something went wrong with writing the file ${e}`)});
}

};

module.exports = WriteToFile