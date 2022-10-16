class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        products.forEach(product => {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                this.budgetMoney -= productTotalPrice;
                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = 0;
                }
                this.stockProducts[productName] += productQuantity;

                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        })
        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`
        }

        const products = neededProducts.map(pr => {
            let [productName, productQuantity] = pr.split(' ');
            productQuantity = Number(productQuantity);
            return {name: productName, quantity: productQuantity};
        })

        this.menu[meal] = {products, price};

        let mealsNumber = Object.keys(this.menu).length;

        if (mealsNumber === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else {
            return `Great idea! Now with the ${meal} we have ${mealsNumber} meals in the menu, other ideas?`
        }
    }

    showTheMenu() {
        let menu = Object.entries(this.menu);
        if (menu.length === 0) {
            return `Our menu is not ready yet, please come later...`
        }

        return menu
            .map(([meal, value]) => `${meal} - $ ${value.price}`)
            .join('\n');
    }

    makeTheOrder(meal) {

        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        const mealDetails = this.menu[meal];

        try {
            mealDetails.products
                .forEach(pr => {
                    if (!(this.stockProducts.hasOwnProperty(pr.name) && this.stockProducts[pr.name] >= pr.quantity)) {
                        throw  new Error(`For the time being, we cannot complete your order (${meal}), we are very sorry...`);
                    }
                });


            mealDetails.products
                .forEach(pr => {
                    this.stockProducts[pr.name] -= pr.quantity
                });
            this.budgetMoney += mealDetails.price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${mealDetails.price}.`

        } catch (ex) {
            return ex.message;
        }
    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
//
// //let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());


// let kitchen = new Restaurant(1000);
// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));
