const {assert} = require('chai');
const companyAdministration = require('./companyAdministration');

describe("companyAdministration tests suit", function () {
    describe("hiringEmployee ", function () {
        it('If the value of the string position is different from \"Programmer\", throw an error', () => {
            assert.throws(() => companyAdministration.hiringEmployee('test', 'Cleaner', 1),
                Error, 'We are not looking for workers for this position.')
        });

        it('If the yearsЕxperience are greater than or equal to 3, return meassage', () => {
            assert.equal(companyAdministration.hiringEmployee('test', 'Programmer', 3),
                `test was successfully hired for the position Programmer.`);
            assert.equal(companyAdministration.hiringEmployee('test', 'Programmer', 5),
                `test was successfully hired for the position Programmer.`);
        });

        it('Otherwise, return meassage', () => {
            assert.equal(companyAdministration.hiringEmployee('test', 'Programmer', 1),
                `test is not approved for this position.`);
        });
    });

    describe("calculateSalary  ", function () {
        it("Calculate the salary by multiplying the pay for one hour by the number of hours", function () {
            assert.equal(companyAdministration.calculateSalary(10), 150);
            assert.equal(companyAdministration.calculateSalary(160), 2400);
            assert.equal(companyAdministration.calculateSalary(161), 3415);
        });

        it("if the hours are not a number, or are a negative number, throw an error", function () {
            assert.throws(() => companyAdministration.calculateSalary(), Error, 'Invalid hours');
            assert.throws(() => companyAdministration.calculateSalary(-10), Error, 'Invalid hours');
            assert.throws(() => companyAdministration.calculateSalary('10'), Error, 'Invalid hours');
        });
    });

    describe("firedEmployee ", function () {
        it("Removes an element (employee) from the array that is located on the index specified as a parameter.", function () {
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0), 'Ivan, George');
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1), 'Petar, George');
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2), 'Petar, Ivan');
        });

        it('If passed employees parameter is not an array throws exception', () => {
            assert.throws(() => companyAdministration.firedEmployee(), Error, 'Invalid input');
            assert.throws(() => companyAdministration.firedEmployee('', 1), Error, 'Invalid input');
        });

        it('If the index is not a number and is outside the limits of the array throws exception', () => {
            assert.throws(() => companyAdministration.firedEmployee(['test']), Error, 'Invalid input');
            assert.throws(() => companyAdministration.firedEmployee(['test'], ''), Error, 'Invalid input');
            assert.throws(() => companyAdministration.firedEmployee(['test'], -1), Error, 'Invalid input');
            assert.throws(() => companyAdministration.firedEmployee(['test'], 0.1), Error, 'Invalid input');
            assert.throws(() => companyAdministration.firedEmployee(['test'], 1), Error, 'Invalid input');
        });
    });
});
