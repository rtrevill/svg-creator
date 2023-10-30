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
        message: 'What colour?'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please write some text (max 3 letters)',
        validate(value) {
            if (value.length < 4){
                return true;
            }
        return 'Please ensure there are 3 letters Maximum'
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