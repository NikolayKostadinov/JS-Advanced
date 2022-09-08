function solve(commands) {
    let operationNum = 1;
    let operation = {};
    let result = [];
    operation.add = (arr, n) => arr.push(n);
    operation.remove = (arr) => arr.pop();
    commands.forEach(cmd => {
        operation[cmd](result, operationNum++);
    });

    return result.length > 0 ? result.join("\n") : "Empty" ;
}

console.log(solve(['add', 
'add', 
'add', 
'add']));

console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']));

console.log(solve(['remove', 
'remove', 
'remove']));
