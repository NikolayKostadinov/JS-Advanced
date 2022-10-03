const {assert} = require('chai');
const {isOddOrEven} = require('../02-even-or-odd');

describe('02-even-or-odd Test Suit', ()=>{
    it('even is even string',()=>{
        assert.equal( isOddOrEven('even'),'even');
    });

    it('odd is odd string',()=>{
        assert.equal( isOddOrEven('odd'),'odd');
    });

    it('empty string is even string',()=>{
        assert.equal( isOddOrEven(''),'even');
    });

    it('no string is undefined',()=>{
        assert.isUndefined( isOddOrEven());
    });

    it('1 is undefined',()=>{
        assert.isUndefined( isOddOrEven(1));
    });
});