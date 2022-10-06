function createPerson(firstName, lsatName) {
    const person = {
        firstName: firstName,
        lastName: lsatName
    };
    Object.defineProperty(person, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(value) {
            const tokens = value.split(' ');
            if (tokens.length === 2) {
                [this.firstName, this.lastName] = tokens;
            }
        },
        enumerable: true,
        configurable: true
    })

    return person;
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla

console.log('------------------------------');

person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson

