const Render = require('./render');



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
    let top = new Render.Render().renderTopofPage();
    let pageText = new Render.Render().renderText(text, textColour);

    (shape === 'circle') ? pageBody = new Render.Circle().renderCirc(shape, colour):
    (shape === 'square') ? pageBody = new Render.Square().renderSquare(colour):
    pageBody = new Render.Triangle().renderTriangle(colour);
    
    pageBody = (`${top}${pageBody}${pageText}`);

return pageBody;
};

}

module.exports = FullRender