const {assert} = require('chai');
const {sum} = require('../sum-of-numbers');

describe('sum-of-numbers test suit', () => {
    it('[1,2,3] returns 6', () => {
        assert.equal(sum([1,2,3]), 6)
    });

    it('[1,2,3] returns 6', () => {
        assert.equal(sum([]), 0)
    });
});
