
// require testing api
const assert = require('assert');

// require reciprocal function for testing
const reciprocal = require('../problems/number-fun.js');

// reciprocal function test
describe('reciprocal()', function() {
    context('given a number', () => {
        it('should return the reciprocal of the given number', function() {
            // arrange
            const result1 = reciprocal(2);
            const result2 = reciprocal(25);
            const answer1 = .5;
            const answer2 = .04;
            assert.strictEqual(result1, answer1);
            assert.strictEqual(result2, answer2);
            // act

            // assert
        })
    })
})
