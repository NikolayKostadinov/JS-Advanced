function firstKNumbers(n, k) {
    const result = [1];
    for (let i = 1; i < n; i++) {
        let element = 0;
        for (let j = i - k; j < i; j++) {
            element += result[j] ? result[j] : 0;
        }
        result.push(element);
    }

    return result;
}

console.log(firstKNumbers(6, 3));
console.log(firstKNumbers(8, 2));