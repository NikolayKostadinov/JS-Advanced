function townPopulation(input) {
    const towns = {};
    for (const record of input) {
        const [name, population] = record.split(' <-> ');
        if (!towns[name]) towns[name] = 0;
        towns[name] += Number(population);
    }

    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }
}


// functional
function townPopulationFunstional(input) {
    const towns = {};
    input.forEach(record => {
        const [name, population] = record.split(' <-> ');
        towns[name] = (towns[name] | 0) + Number(population);
    });

    return Object.keys(towns)
        .map(key => console.log(`${key} : ${towns[key]}`))
        .join('\n');
}


townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);

console.log('-----------------------------');

townPopulation(
    ['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000']
);

console.log('-----------------------------');


townPopulationFunstional(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);

console.log('-----------------------------');

townPopulationFunstional(
    ['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000']
);