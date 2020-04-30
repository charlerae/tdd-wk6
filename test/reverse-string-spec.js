
// require testing api
const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);
// require problem module
const reverseString = require('../problems/reverse-string.js');

// test for reverse string function
describe('reverseString()', function(){
    // let anotherString = 'Hi There';
    it('should reverse the order of the characters of that string', function() {
            // arrange
        let aString = 'testing123';
            // act
        reverseString(aString);
            // assert
         expect(aString).to.equal('321gnitset');
     });
 });
