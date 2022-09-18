const person = {
    name: 'Pesho',
    sex: 'male',
    sayHi() {
        return `Hello from ${this.name}!`;
    }
};

console.log(person.sayHi());

const myFunc = person.sayHi;

console.log(myFunc());

const person2 = {
    name: 'Gohso',
    sayHi: myFunc
};

console.log(person2.sayHi());


function sayHi() {
    return `${this.name} says hi!`;
}

person.hi = sayHi;
person2.hi = sayHi;

console.log(person.hi());
console.log(person2.hi());

const person3 = {
    name: 'Ivan',
    sayHi
};

console.log(person3.sayHi());


