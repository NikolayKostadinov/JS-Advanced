function printContext() {
    console.log(this);
}

printContext();

console.log('-----------------------------------------------------------');

let obj = {
    counter: 5,
    printContext
};

obj.printContext();

//document.querySelector('button').addEventListener('click', printContext);

console.log('-----------------------------------------------------------');
let obj1 = {
    counter: 10
}

function sum(b){
    console.log(this);
    console.log(this.counter + b);
}

printContext.apply(obj1);

console.log('-----------------------------------------------------------');

sum.call(obj1, 3)

