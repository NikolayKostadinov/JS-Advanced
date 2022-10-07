function toStringExtension() {
    function Person(name, email) {
        this.name = name;
        this.email = email;
    }

    Person.prototype.toString = function () {
        return `Person (name: ${this.name}, email: ${this.email})`;
    }

    function Teacher(name, email, subject) {
        Person.call(this, name, email);
        this.subject = subject;
    }

    Teacher.prototype = Object.create(Person.prototype);
    Teacher.prototype.constructor = Teacher;

    Teacher.prototype.toString = function () {
        return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
    }

    function Student(name, email, course) {
        Person.call(this, name, email);
        this.course = course;
    }

    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    Student.prototype.toString = function () {
        return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let classes = toStringExtension();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let t = new Teacher("Ivan", 'ivan@ivan.com', "Graphics");
console.log(t);
console.log(t.toString());
