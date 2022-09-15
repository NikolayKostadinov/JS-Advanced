function negPosNumbers(arr){
    const result = [];

    for (const num of arr) {
        if  (Number(num) < 0){
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    return console.log(result.join('\n'));
}

negPosNumbers([7, -2, 8, 9]);
console.log('--------------------');
negPosNumbers([3, -2, 0, -1]);
