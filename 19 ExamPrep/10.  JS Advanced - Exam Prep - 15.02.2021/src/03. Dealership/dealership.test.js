const {assert} = require('chai');
const dealership = require('./dealership');


describe("Tests …", function () {
    describe("newCarCost", function () {
        it("Returns the price of the car", function () {
            assert.equal(dealership.newCarCost('Audi A4 B8', 50000), 35000);
            assert.equal(dealership.newCarCost('Moskvich', 50000), 50000);
        });
    });
    describe("carEquipment", function () {
        it("returns an array with all the selected extras", function () {
            assert.deepEqual(dealership.carEquipment([`heated seats`, `sliding roof`, `sport rims`, `navigation`, 'stereo'], [0, 3, 4]),
                [`heated seats`, `navigation`, 'stereo'])

            assert.deepEqual(dealership.carEquipment([`heated seats`, `sliding roof`, `sport rims`, `navigation`, 'stereo'], []),
                []);

            assert.deepEqual(dealership.carEquipment([`heated seats`, `sliding roof`, `sport rims`, `navigation`, 'stereo'], [1]),
                [`sliding roof`]);
        });
    });
    describe("euroCategory", function () {

        it("returns a message ", function () {
            assert.equal(dealership.euroCategory(4),
                'We have added 5% discount to the final price: 14250.')
            assert.equal(dealership.euroCategory(5),
                'We have added 5% discount to the final price: 14250.')
            assert.equal(dealership.euroCategory(3),
                'Your euro category is low, so there is no discount from the final price!')
        });
    });
});
