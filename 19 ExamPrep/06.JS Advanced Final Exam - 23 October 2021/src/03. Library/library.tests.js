const {assert} = require('chai');
const library = require('./library');

describe("Library test suit", function () {
    describe("calcPriceOfBook ", function () {
        it("The function calculated price of the book ", function () {
            assert.equal(library.calcPriceOfBook('Test1', 1992), `Price of Test1 is 20.00`);
            assert.equal(library.calcPriceOfBook('Test1', 1980), `Price of Test1 is 10.00`);
            assert.equal(library.calcPriceOfBook('Test1', 1979), `Price of Test1 is 10.00`);
        });

        it('Invalid input throws exception.', () => {
            assert.throw(() => library.calcPriceOfBook(), Error, 'Invalid input');
            assert.throw(() => library.calcPriceOfBook(1, 1), Error, 'Invalid input');
            assert.throw(() => library.calcPriceOfBook('test', '1'), Error, 'Invalid input');
            assert.throw(() => library.calcPriceOfBook('test', 1.1), Error, 'Invalid input');
        })
    });
    // TODO: …
    describe("findBook ", function () {
        it("If the length of the booksArr array is zero, throw an error", () => {
            assert.throw(() => library.findBook([], 'Test1'), Error, 'No books currently available');
        });

        it('If present in the array, the function return: \"We found the book you want.\"', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy'), 'We found the book you want.');
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Life Style'), 'We found the book you want.');
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Torronto'), 'We found the book you want.');
        });

        it('If present in the array, the function return: \\"The book you are looking for is not here!\\"', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Not found'), 'The book you are looking for is not here!');
        });
    });
    // TODO: …
    describe("arrangeTheBooks", function () {
        it("if the countBooks is not an integer number, or is a negative number, throw error", () => {
            assert.throw(() => library.arrangeTheBooks(), Error, 'Invalid input');
            assert.throw(() => library.arrangeTheBooks(-1), Error, 'Invalid input');
            assert.throw(() => library.arrangeTheBooks(1.1), Error, 'Invalid input');
            assert.throw(() => library.arrangeTheBooks(''), Error, 'Invalid input');
        });

        it('If all the books are arranged on the shelves', () => {
            assert.equal(library.arrangeTheBooks(40), 'Great job, the books are arranged.');
            assert.equal(library.arrangeTheBooks(39), 'Great job, the books are arranged.');
        });

        it('if no space has been reached', () => {
            assert.equal(library.arrangeTheBooks(41), 'Insufficient space, more shelves need to be purchased.');
        });
    });
});
