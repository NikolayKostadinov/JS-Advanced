function sortingNumbers(numbers) {
    let sorted = numbers
        .map(Number)
        .sort((a, b) => a - b);

    let result = [];
    while (sorted.length) {
        result.push(sorted.shift());
        if (sorted.length) result.push(sorted.pop());
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));