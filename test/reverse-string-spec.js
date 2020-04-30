
// require testing api
const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);
// require problem module
const rev = require('../problems/reverse-string.js');

// test for reverse string function
describe('rev', () => {
    it('should reverse the order of the characters of the given string', function() {
            // arrange
        // let aString = 'testing123';
            // act
        let abc = rev('testing123');
            // assert
         expect(abc).to.equal('321gnitset');
     });
 });
