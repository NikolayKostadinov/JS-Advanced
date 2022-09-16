function magicMatrices(mat) {
    const sum = (arr) => arr.reduce((p, c) => p + c);
    const targetSum = sum(mat[0]);
    for (let i = 0; i < mat.length; i++) {
        if (sum(mat[i]) != targetSum) {
            console.log('false');
            return;
        }

        let colSum = 0;

        for (let j = 0; j < mat.length; j++) {
            colSum += mat[j][i];
        }

        if (colSum != targetSum) {
            console.log('false');
            return;
        }
    }
    console.log('true');
}

magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);

magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);
magicMatrices(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);