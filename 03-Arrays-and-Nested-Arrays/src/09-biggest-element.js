function biggestElement(matrix) {
    let max = Number.MIN_SAFE_INTEGER;
    matrix.forEach(row => {
        row.forEach(element => max = max < element ? element : max);
    });

    console.log(max);
}


function biggestElementReducer(arr) {
    console.log(arr
        .reduce((prev, curr) => {
            let rowMax = Math.max(...curr);
            return prev < rowMax ? rowMax : prev;  
        }, Number.MIN_SAFE_INTEGER));
}

biggestElement([[20, 50, 10],
[8, 33, 145]]);

biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]);

console.log('------------------');

biggestElementReducer([[20, 50, 10],
[8, 33, 145]]);

biggestElementReducer([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]);