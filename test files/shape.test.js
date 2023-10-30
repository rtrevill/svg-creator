const Shape = require('../files/shape')

describe('Shape', () => {
    describe('renderText', () => {
        it('should auto fill the text and text colour correctly', () =>{
            const textColour = 'white';
            const textContent = 'Christmas';
            const render = new Shape.Shape();
            expect(render.renderText(textContent, textColour)).toEqual('<text x="100" y="120" fill="white" transform="" font-size="5rem">Christmas</text></svg>');
        });
    });
});
describe('Circle', () =>{
    describe('renderCirc', () => {
        it('should auto fill shape type and the colour', () =>{
            const shapeColour = 'purple';
            const render = new Shape.Circle();
            expect(render.renderCirc('circle',shapeColour)).toEqual('<circle cx="150" cy="100" r="98" stroke="purple" stroke-width="4" fill="purple" />');
        });
    });
});
describe('Square', () =>{
    describe('renderSquare', () => {
        it('should auto fill the colour correctly', () =>{
            const shapeColour = 'orange';
            const render = new Shape.Square();
            expect(render.renderSquare(shapeColour)).toEqual('<rect x="52" y="2" width="198" height="198" style="fill:orange;stroke:orange;stroke-width:5;fill-opacity:1.0;stroke-opacity:0.9" />');
        });
    });
});
describe('Triangle', () =>{
    describe('renderTriangle', () => {
        it('should auto fill the colour correctly', () =>{
            const shapeColour = 'yellow';
            const render = new Shape.Triangle();
            expect(render.renderTriangle(shapeColour)).toEqual('<polygon points="40,200 260,200 150,10" style="fill:yellow;stroke:yellow;stroke-width:1" />');
        });
    });
});

