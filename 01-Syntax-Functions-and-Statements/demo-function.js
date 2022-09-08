// function declaration
function printFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}

printFullName('Peter', 'Ivanov');

// function expression
let countDown = function (number) {
    for (let i = number; i > 0; i--) {
        console.log(i);
    }
}
console.log('Count down')
countDown(10);

// arrow function
let countUp = (max) => {
    let counter = 0;
    while (max >= counter) {
        console.log(counter++);
    }
} 
console.log('Count up');
countUp(10);