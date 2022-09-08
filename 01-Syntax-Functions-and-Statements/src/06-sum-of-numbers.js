function solve(n, m) {
    let sum = 0;
    const minNum = Number(n);
    const maxNum = Number(m);
    for (let i = minNum; i <= maxNum; i++) {
        sum += i;
    }

    console.log(sum);
}

solve('1', '5');
solve('-8', '20');
