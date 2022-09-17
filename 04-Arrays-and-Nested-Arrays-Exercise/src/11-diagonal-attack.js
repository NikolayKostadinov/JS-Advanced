function diagonalAttack(matrix) {

    printMatrix(matrix);

    function printMatrix(arr) {
        let matrix = arr.map(x => x.split(' ').map(Number));

        let leftSum = 0;
        let rightSum = 0;
        const rows = matrix.length;
        const cols = matrix[0].length;

        for (let i = 0; i < rows; i++) {
            leftSum += matrix[i][i];
            rightSum += matrix[i][cols - 1 - i];
        }

        if (leftSum === rightSum) {
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if(i!==j && j !==(cols - 1 - i))
                    {
                        matrix[i][j] = leftSum;
                    }
                }
            }
        }

        console.log(matrix.reduce(
            (prev, curr) => {
                prev += curr.join(' ') + '\n';
                return prev;
            }, ''));
    }
}

diagonalAttack(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']);

diagonalAttack(
    ['1 1 1',
        '1 1 1',
        '1 1 0']
);