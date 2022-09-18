const person = {
    name: 'Pesho',
    sex: 'male',
    age:23
};

const propName = 'age';
console.log(person[propName]);

console.log(person);

const {name, age} = person;
console.log(name, age);

delete person.sex;
console.log(person);


