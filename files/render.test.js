const Render = require('./render')

describe('Render', () => {
    describe('renderText', () => {
        it('should auto fill the text and text colour correctly', () =>{
            const color = '<text x="100" y="120" fill="white" transform="" font-size="5rem">green</text></svg>';
            const render = new Render.Render();
            expect(render.renderText('green','white')).toEqual(color);
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