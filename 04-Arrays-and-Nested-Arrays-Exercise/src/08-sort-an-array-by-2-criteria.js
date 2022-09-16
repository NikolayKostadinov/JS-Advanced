function sort( arr){
    console.log(arr
        .sort((a,b)=>{
            let res = a.length - b.length;
            if (res === 0){
                res = a.localeCompare(b);
            }

            return res;
        }).join('\n'));
}

sort(['alpha', 
'beta', 
'gamma']
);
console.log('------------------');

sort(
    ['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);
console.log('------------------');

sort(['test', 
'Deny', 
'omen', 
'Default']
);