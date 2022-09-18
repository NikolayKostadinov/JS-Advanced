function cityRecord(name, population, treasury) {
    const record = {
        name: name,
        population: population,
        treasury: treasury
    };
    
    return record;
}

console.log(cityRecord('Tortuga',
    7000,
    15000
));
console.log(cityRecord('Santo Domingo',
    12000,
    23500
));