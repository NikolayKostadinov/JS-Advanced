function solve(...arr){
    let number = Math.max(...arr);
    console.log(`The largest number is ${number}.`);
}

solve(5, -3, 16);
solve(-3, -5, -22.5);
