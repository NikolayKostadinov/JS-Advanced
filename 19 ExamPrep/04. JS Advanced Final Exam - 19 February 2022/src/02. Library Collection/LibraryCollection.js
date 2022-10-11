class LibraryCollection {

    constructor(capacity) {
        this.capacity = capacity;
        this.books = {};
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity === 0) {
            throw new Error('Not enough space in the collection.');
        }
        this.books[bookName] = {author: bookAuthor, payed: false};
        this.capacity--;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        if (!this.books.hasOwnProperty(bookName)) throw new Error(`${bookName} is not in the collection.`)
        if (this.books[bookName].payed) throw new Error(`${bookName} has already been paid.`);

        this.books[bookName].payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        if (!this.books.hasOwnProperty(bookName)) throw new Error('The book, you\'re looking for, is not found.')
        if (!this.books[bookName].payed) throw new Error(`${bookName} need to be paid before removing from the collection.`);

        delete this.books[bookName].payed;
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        if (bookAuthor) {
            const result = Object.entries(this.books)
                .filter(([name, {author, payed}]) => author.localeCompare(bookAuthor) === 0);
            if (result.length === 0) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            } else {
                return result
                    .sort(([name1, value1], [name2, value2]) => name1.localeCompare(name2))
                    .map(([name, {author, payed}]) => `${name} == ${author} - ${payed ? 'Has Paid' : 'Not Paid'}.`)
                    .join('\n');
            }
        } else {
            return `The book collection has ${this.capacity} empty spots left.\n` +
                Object.entries(this.books)
                    .sort(([name1, value1], [name2, value2]) => name1.localeCompare(name2))
                    .map(([name, {author, payed}]) => `${name} == ${author} - ${payed ? 'Has Paid' : 'Not Paid'}.`)
                    .join('\n');
        }
    }
}

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

//const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));
//

// const library = new LibraryCollection(5)
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics());

const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Baj Ivan'));
