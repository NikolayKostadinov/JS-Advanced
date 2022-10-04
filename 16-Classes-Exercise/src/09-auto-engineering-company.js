function solve(input) {
    const brands = new Map();

    input
        .map(r => r.split(' | '))
        .map(arr => ({brand: arr[0], model: arr[1], producedCars: Number(arr[2])}))
        .forEach(car => {
            if (!brands.has(car.brand)) {
                brands.set(car.brand, new Map());
            }

            let cars = brands.get(car.brand);
            if (!cars.has(car.model)){
                cars.set(car.model,0);
            }

            cars.set(car.model, cars.get(car.model) + car.producedCars);
        });

    return Array.from(brands)
        .map(b=>
            b[0] + '\n' +
            Array.from(b[1])
                .map(c => `###${c[0]} -> ${c[1]}`)
                .join('\n')
        )
        .join('\n');


}

console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
));