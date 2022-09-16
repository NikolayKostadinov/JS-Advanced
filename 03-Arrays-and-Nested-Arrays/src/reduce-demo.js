const myArr = [10, 20, 30, 40];
let initialVal = 0;
let result = myArr.reduce((acc, val) => acc + val, initialVal);

console.log(result);