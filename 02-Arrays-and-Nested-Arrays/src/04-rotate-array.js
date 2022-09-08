function solve(arr, number){
    for (let i = 0; i < number; i++) {
        let tmp = arr.pop();
        arr.splice(0, 0, tmp);
    }
    
    return arr.join(" ");
}

console.log(solve(['1', 
'2', 
'3', 
'4'], 
2
));
console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
));