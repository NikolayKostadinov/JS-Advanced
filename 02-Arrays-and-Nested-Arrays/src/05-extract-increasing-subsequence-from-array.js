function solve(arr) {
    arr = arr||[];
    let result = arr.reduce((prev, current) => {
        if (prev.slice(-1) <= current) {
            prev.push(current);
        }
        return prev;
    }, []);

    return result;
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));

console.log(solve([1, 
    2, 
    3,
    4]));

console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]));

    
console.log(solve());