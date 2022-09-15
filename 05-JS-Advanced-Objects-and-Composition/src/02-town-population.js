function solve(input) {
    let towns = [];
    input.forEach(element => {
        let tokens = element.split(' <-> ');
        let town = tokens[0];
        let population = Number(tokens[1]); 
        if (!towns[town]) {
            towns[town] = 0;
        }
        towns[town] += Number(population);
    });

    // for (const key in towns) {
    //     if (Object.hasOwnProperty.call(towns, key)) {
    //        console.log(`${key} : ${towns[key]}`);            
    //     }
    // }

    Object.keys(towns)
    .forEach(key=>console.log(`${key} : ${towns[key]}`));
}

// solve(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']
// );

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);