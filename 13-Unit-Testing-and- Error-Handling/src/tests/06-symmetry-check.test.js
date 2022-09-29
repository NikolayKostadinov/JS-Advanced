const {assert} = require('chai');
const{isSymmetric} = require('../symmetry-check');

describe('Symmetry Checker', ()=>{
    it('return true if is symmetric', ()=>{
        assert.isTrue(isSymmetric([1,0,0,1]));
    });
    it('return false if is not an array', ()=>{
        assert.isFalse(isSymmetric('not array'));
    });

    it('return false if is not symmetric', ()=>{
        assert.isFalse(isSymmetric([1,2,3]));
    });

    it('return true if is symmetric odd-length', ()=>{
        assert.isTrue(isSymmetric([1,0,1]));
    });

    it('return true if is symmetric string array', ()=>{
        assert.isTrue(isSymmetric(['yes','no','yes']));
    });

    it('return true if is symmetric string array', ()=>{
        assert.isTrue(isSymmetric(['yes','no','yes']));
    });

    it('return false if is not symmetric only type is different', ()=>{
        assert.isFalse(isSymmetric([1,2,'1']));
    });
});
