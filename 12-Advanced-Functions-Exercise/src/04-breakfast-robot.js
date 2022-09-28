function solution() {
    const recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
        toString() {
            return `protein=${this.protein} carbohydrate=${this.carbohydrate} fat=${this.fat} flavour=${this.flavour}`;
        }
    }

    let commands = {
        restock(product, quantity) {
            stock[product] += quantity;
            return 'Success';
        },
        prepare(recipe, quantity) {
            const productsNeeded = Object.entries(recipes[recipe]);
            for (const [ingredient, needed] of productsNeeded) {
                if (stock[ingredient] < needed * quantity) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for (const [ingredient, needed] of productsNeeded) {
                stock[ingredient] -= needed * quantity
            }

            return 'Success';
        },
        report() {
            return stock.toString();
        }

    }

    function manage(cmd) {
        const [command, product, quantity] = cmd.split(' ');
        return commands[command](product, Number(quantity));
    }

    return manage;
}

let manager = solution();
console.log(manager('prepare turkey 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));

