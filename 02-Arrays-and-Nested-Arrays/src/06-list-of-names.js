function solve(arr){
    let ix=1;
    return arr.sort((a,b)=>a.localeCompare(b))
    .map(a => ix++ + '.' + a)
    .join("\n");
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));