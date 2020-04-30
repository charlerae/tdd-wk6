
// require testing api
const assert = require('assert');

// require reciprocal function for testing
const reciprocal = require('../problems/number-fun.js');

// reciprocal function test
describe('reciprocal()', function() {
    context('given a number', () => {
        it('should return the reciprocal of the given number', function() {
            // arrange result variables
            const result1 = reciprocal(2);
            // propose answers
            const answer1 = .5;
            // assert
            assert.strictEqual(result1, answer1);
        });
    });
});
