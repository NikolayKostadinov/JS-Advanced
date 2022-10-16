const {assert} = require(`chai`);
const numberOperations = require('./03. Number Operations_Resources');

describe("Number Operations test suit", function () {
    describe("powNumber", function () {
        it("returns the power of the given number", function () {
            assert.equal(numberOperations.powNumber(-2), 4);
            assert.equal(numberOperations.powNumber(0), 0);
            assert.equal(numberOperations.powNumber(3), 9);
        });
    });
    describe("numberChecker", function () {
        it('If lower than 100 the function returns the string: "The number is lower than 100!"', function () {
            assert.equal(numberOperations.numberChecker(-1000), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker(0), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!')
        });

        it('If greater ot equal than 100 the function returns the string: "The number is greater or equal to 100!"', function () {
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!')
            assert.equal(numberOperations.numberChecker(1000), 'The number is greater or equal to 100!')
        });

        it('If the input is not a number the function throws an error', function () {
            assert.throw(() => numberOperations.numberChecker(), Error, 'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker('test'), Error, 'The input is not a number!');
        });
    });
    describe("sumArrays", function () {
        it("The function returns new array, which represents the sum of the two arrays by indexes", function () {
            assert.deepEqual(numberOperations.sumArrays([1,2,3], [1,2,3]), [2,4,6]);
            assert.deepEqual(numberOperations.sumArrays([1,2,3], []), [1,2,3]);
            assert.deepEqual(numberOperations.sumArrays( [],[1,2,3]), [1,2,3]);
        });
    });
});
