class Questions {

listQuestions = function(){
    const qList = [    
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
        message: 'What colour for the shape?'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please write some text (max 3 letters)',
        validate(value) {
            if (value.length > 3){
                return 'Please ensure there are 3 letters Maximum'
            }
        return true;
        },
    },
    {
        type: 'input',
        name: 'textColour',
        message: 'What colour would you like the text?'
    }]

    return qList;
    };
};

module.exports = Questions