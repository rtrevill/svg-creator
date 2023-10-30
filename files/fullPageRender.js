const Render = require('./render');



class FullRender{
    constructor(shape, colour, text, textColour){
        this.shape = shape;
        this.colour = colour;
        this.text = text;
        this.textColour = textColour;
    };

fullPage = function(shape, colour, text, textColour){
    let pageBody = ""
    
    let top = new Render.Render().renderTopofPage();
    console.log(top);


    (shape === 'circle') ? pageBody = new Render.Circle().renderCirc(shape, colour):
    (shape === 'square') ? pageBody = new Render.Square().renderSquare(colour):
    pageBody = new Render.Triangle().renderTriangle(colour);
    console.log(pageBody);

    
    let pageText = new Render.Render().renderText(text, textColour);
    console.log(pageText);

    pageBody = (`${top}${pageBody}${pageText}`);
    console.log(pageBody);
return pageBody;
};

}

module.exports = FullRender