class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const guy1 = new Person('Peter', 33);
const guy2 = new Person('John', 45);

console.log(guy1);
console.log(guy2);

console.log(guy1 instanceof Person);
console.log(guy2 instanceof Person);

console.log(guy2 instanceof Object);