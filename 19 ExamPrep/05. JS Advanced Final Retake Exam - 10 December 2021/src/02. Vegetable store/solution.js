class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = {};
    }

    loadingVegetables(vegetables) {
        vegetables.forEach(r => {
                let [type, quantity, price] = r.split(' ');
                quantity = Number(quantity);
                price = Number(price);
                if (!this.availableProducts.hasOwnProperty(type)) {
                    this.availableProducts[type] = {quantity: 0, price: 0};
                }

                this.availableProducts[type].quantity += quantity;
                if (this.availableProducts[type].price < price) {
                    this.availableProducts[type].price = price;
                }
            }
        );
        return 'Successfully added ' +
            Object.keys(this.availableProducts)
                .join(', ')
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        selectedProducts.forEach(r => {
            let [type, quantity] = r.split(' ');
            quantity = Number(quantity);

            if (!this.availableProducts.hasOwnProperty(type)) throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            if (this.availableProducts[type].quantity < quantity) throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);

            totalPrice += this.availableProducts[type].price * quantity;
            this.availableProducts[type].quantity -= quantity;
        })

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        if (!this.availableProducts.hasOwnProperty(type)) throw new Error(`${type} is not available in the store.`);
        if (this.availableProducts[type].quantity < quantity) {
            this.availableProducts[type].quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        }

        this.availableProducts[type].quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`
    }

    revision() {
        return 'Available vegetables:\n' +
            Object.entries(this.availableProducts)
                .sort(([type1, props1], [type2, props2],) => props1.price - props2.price)
                .map(([type, {price, quantity}]) => `${type}-${quantity}-$${price}`)
                .join('\n') +
            `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;
    }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
// console.log(vegStore.revision());
