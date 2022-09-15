
let arr = ["Hiunday", "BMW", "Mercedes"];

arr.splice(2, 0, "Ford");

console.log(arr);

console.log(arr.splice(2, 1, "Trabant"));

arr.sort((a, b) => a.localeCompare(b));

console.log(arr);

let half = arr.slice(0, 2);
console.log(half);

for(let car of arr.filter(c=>c.length>4)){
    console.log(car);
}

let nums = [1, 2, 3, 4, 5];
let sum = nums.reduce((acc, curr)=>acc+=curr);
console.log(sum);