const person = {
    name: 'Pesho',
    sex: 'male',
    age:23,
    sayHi(){
        console.log(`Hello from ${this.name}!`);
    }
};

const propName = 'age';
console.log(person[propName]);

console.log(person);

const {name, age} = person;
console.log(name, age);

delete person.sex;
console.log(person);


const test = {'kljfsdlk12321 -0945-0#@%$#%': 10};
console.log(test);

person.sayHi();
