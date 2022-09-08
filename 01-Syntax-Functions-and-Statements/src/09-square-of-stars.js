function solve(size) {
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            row += '* ';
        }
        console.log(row.trim());
    }
}

solve(1);
solve(2);
solve(5);
solve(7);
