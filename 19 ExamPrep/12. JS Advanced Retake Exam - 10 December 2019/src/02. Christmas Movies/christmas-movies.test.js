const {assert} = require('chai');
const ChristmasMovies = require('./christmas-movies');

describe("ChristmasMovies test suit", function () {
    describe("Instantiation", function () {
        it("Creates instance", function () {
            const movies = new ChristmasMovies();
            assert.deepEqual(movies.movieCollection, []);
            assert.deepEqual(movies.watched, {});
            assert.deepEqual(movies.actors, []);
        });
    });

    describe("buyMovie", function () {
        it("return a proper message if input is ok", function () {
            //arrange
            const movieName = "The Matrix";
            const actors = ['kianu', 'Pesho', 'Pesho', 'Tosho'];
            const actorsNonRepeat = ['kianu', 'Pesho', 'Tosho'];
            const movie = {movieName}
            const cMovie = new ChristmasMovies();

            //act
            const message = cMovie.buyMovie(movieName, actors);

            //assert
            assert.deepEqual(cMovie.movieCollection.find(m => m.name === movieName), {
                name: movieName,
                actors: actorsNonRepeat
            });
            assert.equal(message, `You just got ${movieName} to your collection in which ${actorsNonRepeat.join(', ')} are taking part!`)
        });

        it('throws error if move name exists', () => {
            //arrange
            const movieName = "The Matrix";
            const actors = ['kianu', 'Pesho', 'Pesho', 'Tosho'];
            const actorsNonRepeat = ['kianu', 'Pesho', 'Tosho'];
            const movie = {movieName}
            const cMovie = new ChristmasMovies();
            const message = cMovie.buyMovie(movieName, actors);

            //act & assert
            assert.throw(() => cMovie.buyMovie(movieName, []), Error, `You already own ${movieName} in your collection!`);
        });
    });

    describe("discardMovie", function () {
        it("throws error if move does not exists", function () {
            const cMovie = new ChristmasMovies();
            assert.throw(() => cMovie.discardMovie('The Matrix'), Error, 'The Matrix is not at your collection!');
        });

        it('throws error if move not watched', () => {
            // arrange
            const movieName = "The Matrix";
            const actors = ['kianu', 'Pesho', 'Pesho', 'Tosho'];
            const actorsNonRepeat = ['kianu', 'Pesho', 'Tosho'];
            const movie = {movieName}
            const cMovie = new ChristmasMovies();
            cMovie.buyMovie(movieName, actors);

            // act
            assert.throw(() => cMovie.discardMovie('The Matrix'), Error, `${movieName} is not watched!`);
        });

        it('removes movie if exists and watched', () => {
            // arrange
            const movieName = "The Matrix";
            const actors = ['kianu', 'Pesho', 'Pesho', 'Tosho'];
            const actorsNonRepeat = ['kianu', 'Pesho', 'Tosho'];
            const movie = {movieName}
            const cMovie = new ChristmasMovies();
            cMovie.buyMovie(movieName, actors);
            cMovie.watchMovie(movieName);

            // act
            const message = cMovie.discardMovie(movieName);

            // assert
            assert.equal(message, 'You just threw away The Matrix!');
            assert.isUndefined(cMovie.movieCollection.find(m=>m.name.localeCompare('The Matrix')));
            assert.isFalse(cMovie.watched.hasOwnProperty('The Matrix'));
        });
    });

    describe("watchMovie", function () {
        it("throws error if move does not exists", function () {
            const cMovie = new ChristmasMovies();
            assert.throw(() => cMovie.watchMovie('The Matrix'), Error, 'No such movie in your collection!');
        });

        it('watch movie if exists', () => {
            // arrange
            const movieName = "The Matrix";
            const actors = ['kianu', 'Pesho', 'Pesho', 'Tosho'];
            const actorsNonRepeat = ['kianu', 'Pesho', 'Tosho'];
            const movie = {movieName}
            const cMovie = new ChristmasMovies();
            cMovie.buyMovie(movieName, actors);

            // act
            cMovie.watchMovie(movieName);

            // assert
            assert.equal(cMovie.watched[movieName], 1);

            // act
            cMovie.watchMovie(movieName);

            // assert
            assert.equal(cMovie.watched[movieName], 2);
        });
    });

    describe("favouriteMovie", function () {
        it("If there are no movies in your watched list a new error is thrown", function () {
            const cMovie = new ChristmasMovies();
            assert.throw(() => cMovie.favouriteMovie('The Matrix'), Error, 'You have not watched a movie yet this year!');
        });

        it('correct message', () => {
            // arrange
            const cMovie = new ChristmasMovies();
           cMovie.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
           cMovie.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
           cMovie.buyMovie('Home Alone 2', ['Macaulay Culkin']);
           cMovie.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Rashida Jones']);
           cMovie.watchMovie('The Grinch');
           cMovie.discardMovie('The Grinch');
           cMovie.watchMovie('Home Alone');
           cMovie.watchMovie('Home Alone');
           cMovie.watchMovie('Home Alone');
           cMovie.watchMovie('Last Christmas');
           cMovie.watchMovie('Last Christmas');

           // act
            const message = cMovie.favouriteMovie();

            // assert
            assert.equal(message, 'Your favourite movie is Home Alone and you have watched it 3 times!');
        });
    });

    describe("mostStarredActor", function () {
        it("If there are no movies in your collection a new error is thrown", function () {
            const cMovie = new ChristmasMovies();
            assert.throw(() => cMovie.mostStarredActor('The Matrix'), Error, 'You have not watched a movie yet this year!');
        });

        it('correct message', () => {
            // arrange
            const cMovie = new ChristmasMovies();
            cMovie.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
            cMovie.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            cMovie.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            cMovie.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Rashida Jones']);
            cMovie.watchMovie('The Grinch');
            cMovie.discardMovie('The Grinch');
            cMovie.watchMovie('Home Alone');
            cMovie.watchMovie('Home Alone');
            cMovie.watchMovie('Home Alone');
            cMovie.watchMovie('Last Christmas');
            cMovie.watchMovie('Last Christmas');

            // act
            const message = cMovie.mostStarredActor();

            // assert
            assert.equal(message, 'The most starred actor is Macaulay Culkin and starred in 2 movies!');
        });
    });
});
