function extractIncreasing(arr) {
    return arr.reduce((prev, curr) => {
        if (prev.slice(-1) <= curr) {
            prev.push(curr);
        }
        return prev;
    }, []);
}

console.log(extractIncreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]));

console.log(extractIncreasing([1, 2, 3, 4]));

console.log(extractIncreasing([20, 3, 2, 15, 6, 1]));