class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this._dishes = {};
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = value;
    }


    get dishes() {
        return Object.values(this._dishes);
    }

    shopping([product, price]) {
        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }
        this.products.push(product)
        this.budget -= price;
        return `You have successfully bought ${product}!`;
    }

    recipes({recipeName, productsList}) {
        productsList.forEach(pr => {
            if (!this.products.includes(pr)) {
                throw new Error('We do not have this product');
            }
        });
        this._dishes[recipeName] = {recipeName, productsList};
        return `${recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        if (!this._dishes.hasOwnProperty(dish)) {
            throw new Error('We do not have this dish');
        }

        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name]  = dish;

        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        return Object.entries(this.guests)
            .map(([name, dish]) => `${name} will eat ${dish}, which consists of ${this._dishes[dish].productsList.join(', ')}`)
            .join('\n');
    }
}

// let dinner = new ChristmasDinner(300);
//
// console.log(dinner.shopping(['Salt', 1]));
// console.log(dinner.shopping(['Beans', 3]));
// console.log(dinner.shopping(['Cabbage', 4]));
// console.log(dinner.shopping(['Rice', 2]));
// console.log(dinner.shopping(['Savory', 1]));
// console.log(dinner.shopping(['Peppers', 1]));
// console.log(dinner.shopping(['Fruits', 40]));
// console.log(dinner.shopping(['Honey', 10]));
//
// console.log(dinner.recipes({
//     recipeName: 'Oshav',
//     productsList: ['Fruits', 'Honey']
// }));
// console.log(dinner.recipes({
//     recipeName: 'Folded cabbage leaves filled with rice',
//     productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
// }));
// console.log(dinner.recipes({
//     recipeName: 'Peppers filled with beans',
//     productsList: ['Beans', 'Peppers', 'Salt']
// }));
//
// console.log(dinner.inviteGuests('Ivan', 'Oshav'));
// console.log(dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice'));
// console.log(dinner.inviteGuests('Georgi', 'Peppers filled with beans'));
//
// console.log(dinner.showAttendance());
