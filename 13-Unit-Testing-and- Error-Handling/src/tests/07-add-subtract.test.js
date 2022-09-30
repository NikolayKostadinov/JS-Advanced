const {assert} = require('chai');
const {createCalculator} = require('../add-subtract');

describe('Calculator Test Suit', ()=>{
    it('Contains add(), subtract() and get()', ()=>{
        const calculator = createCalculator();
        assert.isTrue(calculator.hasOwnProperty('add'));
        assert.isTrue(calculator.hasOwnProperty('subtract'));
        assert.isTrue(calculator.hasOwnProperty('get'));
    });

    it('Initial status is 0', ()=>{
        const calculator = createCalculator();
        assert.equal(calculator.get(), 0);
    });

    it('Add 1 and 2 result is 3', ()=>{
        // arrange
        const calculator = createCalculator();

        //act & assert
        calculator.add(1);
        assert.equal(calculator.get(), 1);

        calculator.add(2);
        assert.equal(calculator.get(), 3);
    });

    it('Add "1" and "2" result is "3"', ()=>{
        // arrange
        const calculator = createCalculator();

        //act & assert
        calculator.add('1');
        assert.equal(calculator.get(), 1);

        calculator.add('2');
        assert.equal(calculator.get(), 3);
    });

    it('Subtract 1 and 2 from 10 result is 7', ()=>{
        // arrange
        const calculator = createCalculator();
        calculator.add(10);

        //act & assert
        calculator.subtract(1);
        assert.equal(calculator.get(), 9);

        calculator.subtract(2);
        assert.equal(calculator.get(), 7);
    });

    it('Subtract "1" and "2" from 10 result is 7', ()=>{
        // arrange
        const calculator = createCalculator();
        calculator.add(10);

        //act & assert
        calculator.subtract('1');
        assert.equal(calculator.get(), 9);

        calculator.subtract('2');
        assert.equal(calculator.get(), 7);
    });
});