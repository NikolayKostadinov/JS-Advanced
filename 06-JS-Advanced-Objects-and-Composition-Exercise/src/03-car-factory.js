function carFactory(requirements) {

    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    const caridges = {
        hatchback: { type: 'hatchback', color: requirements.color },
        coupe: { type: 'coupe', color: requirements.color }
    };

    const car = {
        model: requirements.model,
        engine: engines.filter(e => e.power >= requirements.power)[0],
        carriage: caridges[requirements.carriage],
        wheels: Array(4).fill(requirements.wheelsize % 2 !== 0 ? requirements.wheelsize : requirements.wheelsize - 1)
    };

    return car;
}

console.log(carFactory({
        model: 'Brichka',
        power: 65,
        color: 'white',
        carriage: 'hatchback',
}
));

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));