const {assert} = require('chai');
const flowerShop = require('./flowerShop');

describe('flowerShop test suit', () => {
    describe('calcPriceOfFlowers', () => {
        it('returns the multiplies price and quantity rounded to second digit', () => {
            const flower = 'Tulip';
            const price = 2;
            const quantity = 5;
            const sum = (price * quantity).toFixed(2);
            assert.equal(flowerShop.calcPriceOfFlowers(flower, price, quantity), `You need $${sum} to buy ${flower}!`)
        });

        it('In case of submitted invalid parameters, throw an error \"Invalid input!\"', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers(), Error, 'Invalid input!');
            assert.throws(() => flowerShop.calcPriceOfFlowers(1, 1, 1), Error, 'Invalid input!');
            assert.throws(() => flowerShop.calcPriceOfFlowers('flower', '1', 1), Error, 'Invalid input!');
            assert.throws(() => flowerShop.calcPriceOfFlowers('flower', 1, '1'), Error, 'Invalid input!');
            assert.throws(() => flowerShop.calcPriceOfFlowers('flower', 1.1, 1), Error, 'Invalid input!');
            assert.throws(() => flowerShop.calcPriceOfFlowers('flower', 1, 1.1), Error, 'Invalid input!');
        });
    });
    describe('checkFlowersAvailable', () => {
        it('If present in the array, the function return available message', () => {
            const flowers = ["Rose", "Lily", "Orchid"];
            assert.equal(flowerShop.checkFlowersAvailable('Rose', flowers), 'The Rose are available!');
            assert.equal(flowerShop.checkFlowersAvailable('Lily', flowers), 'The Lily are available!');
        });

        it('If not present in the array, the function return unavailable message', () => {
            const flowers = ["Rose", "Lily", "Orchid"];
            assert.equal(flowerShop.checkFlowersAvailable('Tulip', flowers), 'The Tulip are sold! You need to purchase more!');
            assert.equal(flowerShop.checkFlowersAvailable('Cactus', flowers), 'The Cactus are sold! You need to purchase more!');
        });
    });
    describe('sellFlowers', () => {
        it('return the changed array of flowers as a string, joined by " / "', () => {
            const flowers = ["Rose", "Lily", "Orchid"];
            assert.equal(flowerShop.sellFlowers(flowers, 1), 'Rose / Orchid');
            assert.equal(flowerShop.sellFlowers(flowers, 0), 'Lily / Orchid');
            assert.equal(flowerShop.sellFlowers(flowers, 2), 'Rose / Lily');
        });

        it('In case of submitted invalid parameters, throw an error \"Invalid input!\"', () => {
            assert.throws(()=>flowerShop.sellFlowers(), Error, 'Invalid input!');
            assert.throws(()=>flowerShop.sellFlowers('', 0), Error, 'Invalid input!');
            assert.throws(()=>flowerShop.sellFlowers([1,2,3], -1), Error, 'Invalid input!');
            assert.throws(()=>flowerShop.sellFlowers([1,2,3], 3), Error, 'Invalid input!');
        });
    });
});
