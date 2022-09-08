function solve(arr, step) {
    let result = [];
    let index = 0;
    for (let i = 0; i < arr.length; i += step) {
        result[index++] = arr[i];
    }

    return result;
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2);

solve(['dsa',
'asd', 
'test', 
'tset'], 
2);

solve(['1', 
'2',
'3', 
'4', 
'5'], 
6);