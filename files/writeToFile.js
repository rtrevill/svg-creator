const {writeFile} = require('fs/promises');

class WriteToFile{
    constructor(pageBody){
        this.pageBody = pageBody;
    }

fileScribe = function(pageBody){
   writeFile('logo.svg', pageBody);
   console.log('Generated logo.svg');
}

};

module.exports = WriteToFile