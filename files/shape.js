// Parent class of Shape takes all variables from the inquirer questions.
// 2 x methods within render the required opening line for the .svg file, and the text to overlay the shapes.
// These will be the first and last lines in the .svg file 

class Shape{
    constructor(shape, colour, text, textColour){
        this.shape = shape;
        this.colour = colour;
        this.text = text;
        this.textColour = textColour;
    };

renderTopofPage = function(){
    let renderTop = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`
    return renderTop;
    };
    
renderText = function(text, textColour){
    let renderText = `<text x="100" y="120" fill="${textColour}" transform="" font-size="5rem">${text}</text></svg>`
    return renderText;
};
    return;
};


// The Circle, Square and Triangle classes are child classes of the Shapes class.
// They each share the variables with the parent class. This is done through the super declaration.
// Through their respective methods, they render the requested shape in the user-requested colour. 

class Circle extends Shape{
    constructor(shape, colour){
    super(shape, colour)
}
renderCirc = function(shape, colour){
    let optiCirc = `<${shape} cx="150" cy="100" r="98" stroke="${colour}" stroke-width="4" fill="${colour}" />`
    return optiCirc;
};

}

class Square extends Shape{
    constructor(colour){
        super(colour)
    }

renderSquare = function(colour){
    let optiSquare = `<rect x="52" y="2" width="198" height="198" style="fill:${colour};stroke:${colour};stroke-width:5;fill-opacity:1.0;stroke-opacity:0.9" />`
    return optiSquare;
};

}

class Triangle extends Shape{
    constructor(colour){
        super(colour)
    }

renderTriangle = function(colour){
    let optiTrian = `<polygon points="40,200 260,200 150,10" style="fill:${colour};stroke:${colour};stroke-width:1" />`
    return optiTrian;
};

}



module.exports = {Shape,
                Circle,
                Square,
                Triangle,
                };

