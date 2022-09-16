function printNth(arr, n){
    return arr.filter((e,ix) => ix % n === 0);
}

console.log(printNth(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));
console.log(printNth(['dsa',
'asd', 
'test', 
'tset'], 
2
));
console.log(printNth(['1', 
'2',
'3', 
'4', 
'5'], 
6
));