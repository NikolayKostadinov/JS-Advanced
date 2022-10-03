const {assert} = require('chai');
const {lookupChar} = require('../03-char-lookup');

describe('03-char-lookup Test Suit', ()=>{
    it('Kalvados 4th index character is a',()=>{
        assert.equal(lookupChar('Kalvados', 4), 'a');
    });

    it('abcdefg 4th index character is e',()=>{
        assert.equal(lookupChar('abcdefg', 4), 'e');
    });

    it('-1 index character is Incorrect index',()=>{
        assert.equal(lookupChar('abcdefg', -1), 'Incorrect index');
    });

    it('Index over the size of string is Incorrect index',()=>{
        assert.equal(lookupChar('abcdefg', 7), 'Incorrect index');
    });

    it('Non string is undefined',()=>{
        assert.isUndefined(lookupChar({}, 7));
        assert.isUndefined(lookupChar(42, 7));
    });

    it('Non number index is undefined',()=>{
        assert.isUndefined(lookupChar('abc', '1'));
    });

    it('Non integer index is undefined',()=>{
        assert.isUndefined(lookupChar('abc', 0.1));
    });
});