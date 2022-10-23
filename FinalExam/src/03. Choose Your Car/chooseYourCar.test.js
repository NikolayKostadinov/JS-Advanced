const {assert} = require('chai');
const chooseYourCar = require('./chooseYourCar');

describe('ChooseYourCar test suit', () => {

    describe('choosingType ', () => {
        it('throws error if year is less than 1900 and the year is more than 2022', () => {
            assert.throw(() => chooseYourCar.choosingType('Sedan', 'Black', 1899), Error, 'Invalid Year!');
            assert.throw(() => chooseYourCar.choosingType('Sedan', 'Black', 2023), Error, 'Invalid Year!');
        });

        it('If the value of the string type is different from "Sedan", throw an error', () => {
            assert.throw(() => chooseYourCar.choosingType('Other', 'Black', 2000), Error, 'This type of car is not what you are looking for.');
        });

        it('If the year of the car is greater or equal to 2010, return the string', () => {
            assert.equal(chooseYourCar.choosingType('Sedan', 'Black', 2010), 'This Black Sedan meets the requirements, that you have.');
            assert.equal(chooseYourCar.choosingType('Sedan', 'Black', 2011), 'This Black Sedan meets the requirements, that you have.');
            assert.equal(chooseYourCar.choosingType('Sedan', 'Yellow', 2022), 'This Yellow Sedan meets the requirements, that you have.');
        });

        it('Otherwise, if the above conditions are not met, return the following message', () => {
            assert.equal(chooseYourCar.choosingType('Sedan', 'Black', 2009), 'This Sedan is too old for you, especially with that Black color.');
            assert.equal(chooseYourCar.choosingType('Sedan', 'Yellow', 2000), 'This Sedan is too old for you, especially with that Yellow color.');
        });
    });

    describe('brandName', () => {
        it('return the changed array of brands as a string, joined by a comma and a space', () => {
            assert.deepEqual(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0), 'Toyota, Peugeot');
            assert.deepEqual(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1), 'BMW, Peugeot');
            assert.deepEqual(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2), 'BMW, Toyota');
        });

        it('If the index is not a number and is outside the limits of the array', () => {
            assert.throws(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1), Error, 'Invalid Information!');
            assert.throws(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3), Error, 'Invalid Information!');
        });

        it('If passed brands parameter is not an array.', () => {
            assert.throws(() => chooseYourCar.brandName('', 0), Error, 'Invalid Information!');
            assert.throws(() => chooseYourCar.brandName(null, 2), Error, 'Invalid Information!');
            assert.throws(() => chooseYourCar.brandName(undefined, 2), Error, 'Invalid Information!');
        });


    });
    describe('carFuelConsumption', () => {
        it('If the liters/100km is less or equal to 7L. return the following message', () => {
            assert.equal(chooseYourCar.carFuelConsumption(100,7), 'The car is efficient enough, it burns 7.00 liters/100 km.');
            assert.equal(chooseYourCar.carFuelConsumption(100,6), 'The car is efficient enough, it burns 6.00 liters/100 km.');
        });

        it('If the liters/100km is greater than 7L. return the following message', () => {
            assert.equal(chooseYourCar.carFuelConsumption(100,8), 'The car burns too much fuel - 8.00 liters!');
        });

        it('If passed parameters are not valid numbers throw exception', () => {
            assert.throws(() => chooseYourCar.carFuelConsumption(), Error, 'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption('1', 2), Error, 'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(2, '2'), Error, 'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(-1, 1), Error, 'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(1, -1), Error, 'Invalid Information!');
        });
    });
});
