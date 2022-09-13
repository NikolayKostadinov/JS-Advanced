function sumOfNumbers(n, m) {
    let sum = 0;
    const minNum = Number(n);
    const maxNum = Number(m);
    for (let i = minNum; i <= maxNum; i++) {
        sum += i;
    }

    console.log(sum);
}

sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');
