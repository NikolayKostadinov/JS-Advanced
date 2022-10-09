const {assert} = require('chai');
const {carService} = require('./car-service');

describe("Car service test suit", function () {
    describe("isItExpensive", function () {
        it('When issue is equal to \"Engine\" or \"Transmission\" correct answer', function () {
            const answer = 'The issue with the car is more severe and it will cost more money';
            assert.equal(carService.isItExpensive('Engine'), answer);
            assert.equal(carService.isItExpensive('Transmission'), answer);
        });

        it('When issue is equal to \"Engine\" or \"Transmission\" correct answer', () => {
            const answer = `The overall price will be a bit cheaper`;
            assert.equal(carService.isItExpensive('Tire'), answer);
            assert.equal(carService.isItExpensive('Belt'), answer);
        });

        it('In all not valid cases it will be correct answer', () => {
            const answer = `The overall price will be a bit cheaper`;
            assert.equal(carService.isItExpensive(null), answer);
            assert.equal(carService.isItExpensive(undefined), answer);
            assert.equal(carService.isItExpensive(), answer);
            assert.equal(carService.isItExpensive(''), answer);
        });
    });

    describe("discount", function () {
        it("It will be no discount if ", function () {
            let message = 'You cannot apply a discount';
            assert.equal(carService.discount(2, 100), message);
            assert.equal(carService.discount(1, 100), message);
        });

        it("15% when numberOfParts is higher than 2 and smaller or equal to 7", function () {
            assert.equal(carService.discount(3, 100), 'Discount applied! You saved 15$');
            assert.equal(carService.discount(7, 1000), 'Discount applied! You saved 150$');
        });

        it("30% when numberOfParts is higher than 7", function () {
            assert.equal(carService.discount(8, 100), 'Discount applied! You saved 30$');
            assert.equal(carService.discount(100, 1000), 'Discount applied! You saved 300$');
        });

        it('if the numberOfParts and totalPrice are not a number, throw an error', function () {
            assert.throws(() => carService.discount(), Error, 'Invalid input');
            assert.throws(() => carService.discount(1), Error, 'Invalid input');
            assert.throws(() => carService.discount(null, 1), Error, 'Invalid input');
            assert.throws(() => carService.discount('5', 1), Error, 'Invalid input');
            assert.throws(() => carService.discount(5, '10'), Error, 'Invalid input');
        });
    });

    describe("partsToBuy", function () {
        it("calculates proper price", function () {
            // arrange
            const catalog = [{part: "blowoff valve", price: 145},
                {part: "coil springs", price: 230},
                {part: "injectors", price: 200},
                {part: "belt", price: 340}];
            const neededParts = ["blowoff valve", "injectors"];

            // act
            const price = carService.partsToBuy(catalog, neededParts);

            //assert
            assert.equal(price, 345);
        });

        it("If partsCatalog is empty, return 0", function () {
            // arrange
            const catalog = [];
            const neededParts = ["blowoff valve", "injectors"];

            // act
            const price = carService.partsToBuy(catalog, neededParts);

            //assert
            assert.equal(price, 0);
        });

        it('If passed partsCatalog or neededParts parameters are not an arrays throw an error "Invalid input"', function () {
            assert.throws(() => carService.partsToBuy(), Error, 'Invalid input');
            assert.throws(() => carService.partsToBuy(1), Error, 'Invalid input');
            assert.throws(() => carService.partsToBuy(null, 1), Error, 'Invalid input');
            assert.throws(() => carService.partsToBuy('5', 1), Error, 'Invalid input');
            assert.throws(() => carService.partsToBuy(5, '10'), Error, 'Invalid input');
        });
    });
});
