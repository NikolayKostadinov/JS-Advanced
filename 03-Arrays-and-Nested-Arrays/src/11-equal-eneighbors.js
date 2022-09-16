function ecualNeighbors(matrix){
    let count = 0;
    const rows = matrix.length;
    for (let i = 0; i < rows; i++) {
        const cols = matrix[i].length;
        for (let j = 0; j < cols; j++) {
            if (j <  cols - 1 && matrix[i][j] === matrix[i][j + 1]) count++;   
            if (i <  rows - 1 && matrix[i][j] === matrix[i + 1][j]) count++;   
        }
    }

    console.log(count);
}

ecualNeighbors(
    [['2', '3', '4', '7', '0'],
 ['4', '0', '5', '3', '4'],
 ['2', '3', '5', '4', '2'],
 ['9', '8', '7', '5', '4']]
);

ecualNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);