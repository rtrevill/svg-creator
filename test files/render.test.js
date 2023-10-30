const Render = require('../files/render')

describe('Render', () => {
    describe('renderText', () => {
        it('should auto fill the text and text colour correctly', () =>{
            const color = '<text x="100" y="120" fill="white" transform="" font-size="5rem">Christmas</text></svg>';
            const render = new Render.Render();
            expect(render.renderText('Christmas','white')).toEqual(color);
        });
    });
});
describe('Circle', () =>{
    describe('renderCirc', () => {
        it('should auto fill shape type and the colour', () =>{
            const color = '<circle cx="150" cy="100" r="98" stroke="purple" stroke-width="4" fill="purple" />';
            const render = new Render.Circle();
            expect(render.renderCirc('circle','purple')).toEqual(color);
        });
    });
});
describe('Square', () =>{
    describe('renderSquare', () => {
        it('should auto fill the colour correctly', () =>{
            const color = '<rect x="52" y="2" width="198" height="198" style="fill:orange;stroke:orange;stroke-width:5;fill-opacity:1.0;stroke-opacity:0.9" />';
            const render = new Render.Square();
            expect(render.renderSquare('orange')).toEqual(color);
        });
    });
});
describe('Triangle', () =>{
    describe('renderTriangle', () => {
        it('should auto fill the colour correctly', () =>{
            const color = '<polygon points="40,200 260,200 150,10" style="fill:yellow;stroke:yellow;stroke-width:1" />';
            const render = new Render.Triangle();
            expect(render.renderTriangle('yellow')).toEqual(color);
        });
    });
});





// const Arithmetic = require('../arithmetic.js');

// // A testing suite for Arithmetic is created.
// describe('Arithmetic', () => {
//   // Several tests are created to check that modulus does in fact return the remainder of the quotient of the two numbers.
//   // This test checks to see if 2 % 2 has a remainder of 0 and returns 0.
//   describe('modulus', () => {
//     it('should calculate 2 % 2 and return 0 as the remainder', () => {
//       const total = 0;
//       const arithmetic = new Arithmetic();
//       expect(arithmetic.modulus(2, 2)).toEqual(total);
//     });

//     // This test checks to see if 3 % 2 has a remainder of 1 and returns 1.
//     it('should calculate 3 % 2 and return 1 as the remainder', () => {
//       const total = 1;
//       const arithmetic = new Arithmetic();
//       expect(arithmetic.modulus(3, 2)).toEqual(total);
//     });

//     // This test checks to see if 10 % 6 has a remainder of 4 and returns 4.
//     it('should calculate 10 % 6 and return 4 as the remainder', () => {
//       const total = 4;
//       const arithmetic = new Arithmetic();
//       expect(arithmetic.modulus(10, 6)).toEqual(total);
//     });
//   });
// });