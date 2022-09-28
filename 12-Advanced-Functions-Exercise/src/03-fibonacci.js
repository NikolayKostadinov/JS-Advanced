function getFibonator(){
    let prevNumber = 0;
    let currentNumber = 1;

    function fib(){
        let next = prevNumber + currentNumber;
        prevNumber = currentNumber;
        currentNumber = next;
        return prevNumber;
    }
    return fib;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
