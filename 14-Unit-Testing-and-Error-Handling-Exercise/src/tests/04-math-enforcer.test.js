const {assert} = require('chai');
const {mathEnforcer} = require('../04-math-enforcer')

describe('04-math-enforcer Test Suit', () => {
    describe('addFive', () => {
        it('should return undefined for non-number input', () => {
            assert.isUndefined(mathEnforcer.addFive());
            assert.isUndefined(mathEnforcer.addFive(''));
            assert.isUndefined(mathEnforcer.addFive('1'));
        });

        it('should return correct result for positive integer param', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
        })

        it('should return correct result for negative integer param', () => {
            assert.equal(mathEnforcer.addFive(-10), -5);

        });

        it('should return correct result for positive floating point param', () => {
            assert.closeTo(mathEnforcer.addFive(3.14), 8.14, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('should return undefined for non-number input', () => {
            assert.isUndefined(mathEnforcer.subtractTen());
            assert.isUndefined(mathEnforcer.subtractTen(''));
            assert.isUndefined(mathEnforcer.subtractTen('1'));
        });

        it('should return correct result for positive integer param', () => {
            assert.equal(mathEnforcer.subtractTen(15), 5);
        })

        it('should return correct result for negative integer param', () => {
            assert.equal(mathEnforcer.subtractTen(-5), -15);

        });

        it('should return correct result for positive floating point param', () => {
            assert.closeTo(mathEnforcer.subtractTen(3.14), -6.86, 0.01);
        });
    });

    describe('sum', () => {
        it('should return undefined for non-number input', () => {
            assert.isUndefined(mathEnforcer.sum());
            assert.isUndefined(mathEnforcer.sum('', 1));
            assert.isUndefined(mathEnforcer.sum('1', 1));
            assert.isUndefined(mathEnforcer.sum(1, ''));
            assert.isUndefined(mathEnforcer.sum(1, '1'));
        });

        it('should return correct result for positive integer params', () => {
            assert.equal(mathEnforcer.sum(1,2), 3);
        })

        it('should return correct result for negative integer param', () => {
            assert.equal(mathEnforcer.sum(-1, -2), -3);
        });

        it('should return correct result for positive floating point param', () => {
            assert.closeTo(mathEnforcer.sum(3.14, 2.1), 5.24, 0.01);
        });
    });
});