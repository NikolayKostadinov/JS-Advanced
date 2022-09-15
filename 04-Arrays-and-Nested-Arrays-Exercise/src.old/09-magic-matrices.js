function solve(matrix) {
    const sum = matrix[0].reduce((prev, curr) => prev += curr);
    for (let i = 1; i < matrix.length; i++) {
        if (sum !== matrix[i].reduce((prev, curr) => prev += curr)) return false;
    }

    for (let i = 0; i < matrix.length; i++) {
        let colSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            colSum += matrix[j][i];
        }
        if (colSum !== sum) return false;
    }

    return true;
}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));

   console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]   
   ));

   console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]   
   ));