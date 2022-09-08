function solve(arr){
    arr.sort((s1,s2)=>{
        let result = s1.length - s2.length;
        if(result === 0){
            result = s1.localeCompare(s2);
        }

        return result;
    });

    return arr.join("\n");
}

console.log(solve(['alpha', 
'beta', 
'gamma']
));
console.log(solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));
console.log(solve(['test', 
'Deny', 
'omen', 
'Default']
));

