
class Render{
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

    // let optiCirc = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    //                     <${shape} cx="150" cy="100" r="98" stroke="${colour}" stroke-width="4" fill="${colour}" />
    //                     <text x="100" y="120" fill="${textColour}" transform="" font-size="5rem">${text}</text>
    //                 </svg>`;
    // let optiSquare = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    //                     <rect x="52" y="2" width="198" height="198"
    //                     style="fill:${colour};stroke:${colour};stroke-width:5;fill-opacity:1.0;stroke-opacity:0.9" />
    //                     <text x="100" y="115" fill="${textColour}" transform="" font-size="5rem">${text}</text>
    //                 </svg>`;
    // let optiTrian = `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">
    //                     <polygon points="40,200 260,200 150,10" style="fill:${colour};stroke:${colour};stroke-width:1" />
    //                     <text x="70" y="150" fill="${textColour}" transform="" font-size="5rem">${text}</text>
    //                 </svg>`;
    // if (shape === ""||colour === ""){
    //     return `Please enter proper data`;
    // };
    // (shape === 'circle') ? pageBody = new Render.Render().Circle().renderCirc(this.shape, this.colour) : console.log('NoNo!!');
    // (shape === 'square') ? pageBody = new Square().renderSquare() : pageBody = new Triangle().renderTriangle();

    return;
};


class Circle extends Render{
    constructor(shape, colour){
    super(shape, colour)
}
renderCirc = function(shape, colour){
    // let optiCirc = 'XPS'
    let optiCirc = `<${shape} cx="150" cy="100" r="98" stroke="${colour}" stroke-width="4" fill="${colour}" />`
    return optiCirc;
};

}

class Square extends Render{
    constructor(colour){
        super(colour)
    }

renderSquare = function(colour){
    let optiSquare = `<rect x="52" y="2" width="198" height="198" style="fill:${colour};stroke:${colour};stroke-width:5;fill-opacity:1.0;stroke-opacity:0.9" />`
    return optiSquare;
};

}

class Triangle extends Render{
    constructor(colour){
        super(colour)
    }

renderTriangle = function(colour){
    let optiTrian = `<polygon points="40,200 260,200 150,10" style="fill:${colour};stroke:${colour};stroke-width:1" />`
    return optiTrian;
};

}



module.exports = {Render,
                Circle,
                Square,
                Triangle,
                };

