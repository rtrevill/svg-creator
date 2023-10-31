const Shape = require('./shape');

// Brings in npm package 'validate-color'
const ValidateColor = require("validate-color").default;

// Class to render complete .svg file code

class FullRender{
    constructor(shape, colour, text, textColour){
        this.shape = shape;
        this.colour = colour;
        this.text = text;
        this.textColour = textColour;
    };

fullPage = function(shape, colour, text, textColour){

    // validation chacks on user data
    if ((colour ==="")||(text==="")||(textColour==="")){
        throw new Error(" All fields need to be filled. Please try again");
    }
    if ((ValidateColor(colour) === false)||(ValidateColor(textColour) === false)){
        throw new Error(" Please enter valid colour name or Hex code");
    }

    // Putting lines of code to variables, by calling the individual functions in the Shape class.
    let pageBody = ""
    let top = new Shape.Shape().renderTopofPage();
    let pageText = new Shape.Shape().renderText(text, textColour);

    // Nested ternary functions calling the render function in the class for the user defined shape
    // The returned value is put to a variable 
    (shape === 'circle') ? pageBody = new Shape.Circle().renderCirc(shape, colour):
    (shape === 'square') ? pageBody = new Shape.Square().renderSquare(colour):
    pageBody = new Shape.Triangle().renderTriangle(colour);
    
    //Completed code to be written is ordered
    pageBody = (`${top}${pageBody}${pageText}`);

return pageBody;
};

}

module.exports = FullRender