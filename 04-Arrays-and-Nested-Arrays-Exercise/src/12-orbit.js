function orbit(input) {
    let [rows, cols, starRow, starCol] = input;

    let matrix = Array(rows).fill(0).map(() => Array(cols).fill(0));

    for(let row = 0; row< rows; row++) {
        for(let col=0; col<cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }
 
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}

orbit([5, 5, 3, 3]);