const {assert} = require('chai');
const bookSelection = require('./bookSelection');

describe('bookSelection tests suit', () => {
    describe("isGenreSuitable", function () {
        it("If the value of the string genre is equal to \"Thriller\" or \"Horror\" and the value of age is less or equal to 12 return correct", function () {
            let genre = 'Thriller';
            let age = 11;
            console.assert(bookSelection.isGenreSuitable(genre, age), `Books with ${genre} genre are not suitable for kids at ${age} age`)
            console.assert(bookSelection.isGenreSuitable(genre, age), `Books with ${genre} genre are not suitable for kids at ${age} age`)
            genre = 'Horror';
            age = 12;
            console.assert(bookSelection.isGenreSuitable(genre, age), `Books with ${genre} genre are not suitable for kids at ${age} age`)
        });

        it("If the value of the string genre is equal to \"Thriller\" or \"Horror\" and the value of age greater than 12 return correct", function () {
            let genre = 'Thriller';
            let age = 13;
            console.assert(bookSelection.isGenreSuitable(genre, age),
                `Books with ${genre} genre are not suitable for kids at ${age} age`)
            genre = 'Horror';
            age = 99;
            console.assert(bookSelection.isGenreSuitable(genre, age),
                `Books with ${genre} genre are not suitable for kids at ${age} age`)
        });

        it("If the value of the string genre is not equal to \"Thriller\" or \"Horror\" all ages are suitable",
            function () {
            let genre = 'Family';
            let age = 10;
            console.assert(bookSelection.isGenreSuitable(genre, age), 'Those books are suitable');

            genre = 'Kids';
            age = 99;
            console.assert(bookSelection.isGenreSuitable(genre, age), 'Those books are suitable')
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
            const books = [{ title: "The Da Vinci Code", genre: "Thriller" },
                { title: "The Thriller", genre: "Thriller" },{ title: "War", genre: "Action" },];
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
