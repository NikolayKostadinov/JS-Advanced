const {assert} = require('chai');
const testNumbers = require('./testNumbers');

describe("TestNumbers test suit", function () {
    describe("sumNumber", function () {
        it("Returns the sum of the given numbers, rounded to second number after decimal point", function () {
            assert.equal(testNumbers.sumNumbers(-1, 2), 1.00);
            assert.equal(testNumbers.sumNumbers(1, 2), 3.00);
            assert.equal(testNumbers.sumNumbers(1.111, 2.222), 3.33);
        });

        it("Returns the sum of the given numbers, rounded to second number after decimal point", function () {
            assert.isUndefined(testNumbers.sumNumbers());
            assert.isUndefined(testNumbers.sumNumbers('1', '2'));
        });


    });
    describe("numberChecker", function () {
        it("If the input is not a number the function throws an error ", function () {
            assert.throw(() => testNumbers.numberChecker(), Error, 'The input is not a number!');
            assert.throw(() => testNumbers.numberChecker('test'), Error, 'The input is not a number!');
        });

        it("if the input is a number, the function checks if it is even.", function () {
            assert.equal(testNumbers.numberChecker(2), 'The number is even!');
            assert.equal(testNumbers.numberChecker(0), 'The number is even!');
            assert.equal(testNumbers.numberChecker(1), 'The number is odd!');
        });
    });
    describe("averageSumArray", function () {
        it("Returns the average sum", function () {
            assert.equal(testNumbers.averageSumArray([3]), 3);
            assert.equal(testNumbers.averageSumArray([2,2]), 2);
            assert.equal(testNumbers.averageSumArray([1, 2, 3]), 2);
        });
    });
});
