function sumFirstLast(arr) {
    return Number(arr[0]) + Number(arr[arr.length - 1]);
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));


function sumFirstLast1(arr) {
    return Number(arr.shift()) + Number(arr.pop());
}

console.log(sumFirstLast1(['20', '30', '40']));
console.log(sumFirstLast1(['5', '10']));