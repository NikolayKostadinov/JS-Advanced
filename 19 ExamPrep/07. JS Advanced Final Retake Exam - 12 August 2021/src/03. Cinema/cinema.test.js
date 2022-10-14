const {assert} = require('chai');
const cinema = require('./cinema');

describe("Cinema test suit", function () {
    describe("showMovies", function () {
        it('If the length of the input array is zero, the function returns the right message', function () {
            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.')
        });

        it('Returns an array of available movies, separated by a comma and space', function () {
            assert.equal(cinema.showMovies(['Joker']), 'Joker');
            assert.equal(cinema.showMovies(['King Kong', 'Joker']), 'King Kong, Joker');
            assert.equal(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker']),
                'King Kong, The Tomorrow War, Joker');
        });
    });
    describe("ticketPrice", function () {
        it("If projectionType present in the schedule, return the price according to the type", function () {
            assert.equal(cinema.ticketPrice("Premiere"), 12.00);
            assert.equal(cinema.ticketPrice("Normal"), 7.50);
            assert.equal(cinema.ticketPrice("Discount"), 5.50);
        });

        it("If projectionType not present in the schedule, throws error", function () {
            assert.throw(() => cinema.ticketPrice(), Error, 'Invalid projection type.')
            assert.throw(() => cinema.ticketPrice('Exclusive'), Error, 'Invalid projection type.')
            assert.throw(() => cinema.ticketPrice(''), Error, 'Invalid projection type.')
            assert.throw(() => cinema.ticketPrice(1), Error, 'Invalid projection type.')
            assert.throw(() => cinema.ticketPrice(null), Error, 'Invalid projection type.')
        });
    });
    describe("swapSeatsInHall", function () {
        it("if not successful and the function returns Unsuccessful change of seats in the hall.", function () {
            assert.equal(cinema.swapSeatsInHall(), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(1, null), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(null, 1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(1, undefined), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(undefined, 1), 'Unsuccessful change of seats in the hall.');

            assert.equal(cinema.swapSeatsInHall('1', 1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(1, '1'), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(1.1, 2), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(2, 1.1), 'Unsuccessful change of seats in the hall.');

            assert.equal(cinema.swapSeatsInHall(1, 21), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(25, 1), 'Unsuccessful change of seats in the hall.');

            assert.equal(cinema.swapSeatsInHall(0, 1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(1, 0), 'Unsuccessful change of seats in the hall.');

            assert.equal(cinema.swapSeatsInHall(1, -1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(-1, 1), 'Unsuccessful change of seats in the hall.');

            assert.equal(cinema.swapSeatsInHall(1, 1), 'Unsuccessful change of seats in the hall.');
        });

        it('Successful change of seats in the hall.', () => {
            assert.equal(cinema.swapSeatsInHall(3, 5), 'Successful change of seats in the hall.')
            assert.equal(cinema.swapSeatsInHall(1, 20), 'Successful change of seats in the hall.')
        })
    });
});
