function solve(input){
    const bottles = new Map();
    const quantities = {};

    for (const record of input) {
        const [juice, quantity] = record.split(' => ')
        if (!quantities.hasOwnProperty(juice)){
            quantities[juice] = 0;
        }
        quantities[juice] += Number(quantity);

        const bottlesQt = Math.floor(quantities[juice] / 1000);
        if (bottlesQt){
            quantities[juice] = quantities[juice] % 1000;
            if (!bottles.has(juice)){
                bottles.set(juice, 0);
            }
            bottles.set(juice, bottles.get(juice) + bottlesQt);
        }
    }

    for (const juice of bottles.entries()) {
        console.log(`${juice[0]} => ${juice[1]}`);
    }
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

console.log('-----------------------');

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);