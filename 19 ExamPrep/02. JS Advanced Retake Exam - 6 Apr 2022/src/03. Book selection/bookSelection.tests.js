const {assert} = require('chai');
const bookSelection = require('./bookSelection');

describe('bookSelection tests suit', () => {
    describe("isGenreSuitable", function () {
        it('If Normal genre is suitable for everyone', () => {
            assert.equal(bookSelection.isGenreSuitable('Test', 0), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Test', 100), `Those books are suitable`);
        });

        it('If genre is Thriller or Horror and age is less than 13 it\'s not suitable', () => {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 12), `Books with Thriller genre are not suitable for kids at 12 age`);
            assert.equal(bookSelection.isGenreSuitable('Thriller', 11), `Books with Thriller genre are not suitable for kids at 11 age`);
            assert.equal(bookSelection.isGenreSuitable('Horror', 12), `Books with Horror genre are not suitable for kids at 12 age`);
            assert.equal(bookSelection.isGenreSuitable('Horror', 11), `Books with Horror genre are not suitable for kids at 11 age`);
        });
    });

    describe("isItAffordable ", function () {
        it('If the result is lower than 0 result is \"You don\'t have enough money\"', () => {
            assert.equal(bookSelection.isItAffordable(5, 4), 'You don\'t have enough money');
            assert.equal(bookSelection.isItAffordable(5, 0), 'You don\'t have enough money');
        });

        it('If budget is enough return message', () => {
            assert.equal(bookSelection.isItAffordable(4, 5), `Book bought. You have 1$ left`);
            assert.equal(bookSelection.isItAffordable(0, 5), `Book bought. You have 5$ left`);
        });

        it('if the price and budget are not a number, throw an error', () => {
            assert.throw(() => bookSelection.isItAffordable(), Error, 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable('1', 1), Error, 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable(1, '1'), Error, 'Invalid input');
        });
    });

    describe("suitableTitles", function () {
        it('Adds the title of the book that its genre is equal to the wantedGenre.', () => {
            // arrange
            const books = [{title: "The Da Vinci Code", genre: "Thriller"},
                {title: "The Thriller", genre: "Thriller"}, {title: "War", genre: "Action"},];
            const wantedGenre = "Thriller";
            // act
            const result = bookSelection.suitableTitles(books, wantedGenre);

            // assert
            assert.equal(result.length, 2);
            assert.equal(result[0], 'The Da Vinci Code')
            assert.equal(result[1], 'The Thriller')
        });

        it('. In case of submitted invalid parameters, throw an error "Invalid input"', () => {
            assert.throw(() => bookSelection.suitableTitles(), Error, 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles('1', 1), Error, 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles(1, '1'), Error, 'Invalid input');
        });
    });
});
