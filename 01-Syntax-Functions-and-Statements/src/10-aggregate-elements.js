function solve(elements){
    let sum1 = 0;
    let sum2 = 0;
    let concat = '';

    for (let i = 0; i < elements.length; i++) {
        sum1 += elements[i];
        sum2 += 1 / elements[i];
        concat += elements[i];
    }

    console.log(sum1);
    console.log(sum2);
    console.log(concat);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);
