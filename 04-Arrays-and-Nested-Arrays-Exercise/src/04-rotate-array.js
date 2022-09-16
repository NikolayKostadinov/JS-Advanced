function rotateArray(arr, times){
    while(times--){
        arr.push(arr.shift());
    }

    arr.join(' ');
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2
);

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);