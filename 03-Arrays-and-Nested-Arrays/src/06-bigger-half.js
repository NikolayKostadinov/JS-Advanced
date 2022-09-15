function biggerHalf(arr) {
    let startIx = Math.floor(arr.length / 2);
    return arr
        .sort((a, b) => Number(a) - Number(b))
        .slice(startIx);
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
