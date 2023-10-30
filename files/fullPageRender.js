const Shape = require('./shape');



class FullRender{
    constructor(shape, colour, text, textColour){
        this.shape = shape;
        this.colour = colour;
        this.text = text;
        this.textColour = textColour;
    };

fullPage = function(shape, colour, text, textColour){

    if ((colour ==="")||(text==="")||(textColour==="")){
        throw new Error(" All fields need to be filled. Please try again");
    }

    let pageBody = ""
    let top = new Shape.Shape().renderTopofPage();
    let pageText = new Shape.Shape().renderText(text, textColour);

    (shape === 'circle') ? pageBody = new Shape.Circle().renderCirc(shape, colour):
    (shape === 'square') ? pageBody = new Shape.Square().renderSquare(colour):
    pageBody = new Shape.Triangle().renderTriangle(colour);
    
    pageBody = (`${top}${pageBody}${pageText}`);

return pageBody;
};

}

module.exports = FullRender