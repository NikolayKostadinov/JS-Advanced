function personAndTeacher() {
    function Person(name, email){
        this.name = name;
        this.email = email;
    }

    function Teacher(name, email, subject){
        Person.call(this, name, email);
        this.subject = subject;
    }

    Teacher.prototype = Object.create(Person.prototype);
    Teacher.prototype.constructor = Teacher;

    return {
        Person,
        Teacher
    }
}

let {Person, Teacher} = personAndTeacher();

let person = new Person('Niki', 'niki@test.com');
let teacher = new Teacher('Lili', 'lili@test.com', 'math');

console.log(person);
console.log(teacher);
console.log('-------------------------------');
console.log(person instanceof Person);
console.log(teacher instanceof Person);
console.log(teacher instanceof Teacher);
