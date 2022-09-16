function processOdd(arr) {
    let result = [];
    arr.forEach((element, index) => {
        if (index % 2 !== 0) {
            result.push(element * 2);
        }
    });
    console.log(result.reverse().join(' '));
}

// functional variant

function processOddFunctional(arr) {
    console.log(arr
        .filter((e, ix) => ix % 2)
        .map(element => element * 2)
        .reverse()
        .join(' '));
}


processOdd([10, 15, 20, 25]);
processOdd([3, 0, 10, 4, 7, 3]);

processOddFunctional([10, 15, 20, 25]);
processOddFunctional([3, 0, 10, 4, 7, 3]);