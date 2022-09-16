function processOdd(arr) {
    let result = [];
    arr.forEach((element, index) => {
        if (index % 2 !== 0) {
            result.push(element * 2);
        }
    });
    console.log(result.reverse().join(' '));
}

processOdd([10, 15, 20, 25]);
processOdd([3, 0, 10, 4, 7, 3]);