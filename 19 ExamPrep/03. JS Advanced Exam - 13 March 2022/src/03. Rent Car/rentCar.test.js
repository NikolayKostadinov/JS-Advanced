const {assert} = require('chai');
const rentCar = require('./rentCar');

describe("rentCar test suit", function () {
    describe("searchCar", function () {
        it("When there are matching elements return count", function () {
            assert(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], 'BMW'),
                'There is 2 car of model BMW in the catalog!');

            assert(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], 'Audi'),
                'There is 1 car of model Audi in the catalog!')
        });

        it('In case of submitted invalid parameters, throw an error "Invalid input!"', () => {
            assert.throws(() => rentCar.searchCar(), Error, 'Invalid input!');
            assert.throws(() => rentCar.searchCar(1, 2), Error, 'Invalid input!');
            assert.throws(() => rentCar.searchCar('["A","B"]', null), Error, 'Invalid input!');
        })

        it('If there are no matching elements, the function throw an error', () => {
            assert.throws(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], 'Moskvich'),
                Error, 'There are no such models in the catalog!');

            assert.throws(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], 'Ford'),
                Error, 'There are no such models in the catalog!');
        })
    });

    describe('calculatePriceOfCar', () => {
        it('In case of submitted invalid parameters, throw an error "Invalid input!"', () => {
            assert.throws(() => rentCar.calculatePriceOfCar(), Error, 'Invalid input!');
            assert.throws(() => rentCar.calculatePriceOfCar('Ford', 2.2), Error, 'Invalid input!');
            assert.throws(() => rentCar.calculatePriceOfCar(null, 2), Error, 'Invalid input!');
        });

        it('returns the model and the price it will cost ', () => {
            assert.equal(rentCar.calculatePriceOfCar('BMW', 2),
                'You choose BMW and it will cost $90!');
            assert.equal(rentCar.calculatePriceOfCar('Mercedes', 3),
                'You choose Mercedes and it will cost $150!');
        });

        it('if there is no such model, the function throw an error: No such model in the catalog!',()=>{
            assert.throws(()=>rentCar.calculatePriceOfCar('Lada', 10), Error, 'No such model in the catalog!');
        });
    });

    describe('checkBudget', ()=>{
        it('Validates input', ()=>{
            assert.throws(()=>rentCar.checkBudget(), Error, 'Invalid input!')
            assert.throws(()=>rentCar.checkBudget('1', 2, 3), Error, 'Invalid input!')
            assert.throws(()=>rentCar.checkBudget(1,'2',3), Error, 'Invalid input!')
            assert.throws(()=>rentCar.checkBudget(1,2,'3'), Error, 'Invalid input!')
        });

        it('If the budget is bigger or equal to cost, function return: You rent a car!',()=>{
            assert.equal(rentCar.checkBudget(10,10,150), 'You rent a car!');
            assert.equal(rentCar.checkBudget(10,10,100), 'You rent a car!');
        });

        it('If the budget is less than cost, the function returns the message: You need a bigger budget!',()=>{
            assert.equal(rentCar.checkBudget(10,10,95), 'You need a bigger budget!');
        });
    })
});
