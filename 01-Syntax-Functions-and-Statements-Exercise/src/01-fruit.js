function fruit(fruit, weight, price){
    let kilo = (weight / 1000);
    let money = kilo * price;
    console.log(`I need $${money.toFixed(2)} to buy ${kilo.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);
