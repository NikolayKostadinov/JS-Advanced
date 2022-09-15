function getPrice(fruit, weightInGrams, pricePerKilo){
    let totalPrice = (weightInGrams / 1000) * pricePerKilo;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${(weightInGrams / 1000).toFixed(2)} kilograms ${fruit}.`);
}

getPrice('orange', 2500, 1.80);
getPrice('apple', 1563, 2.35);