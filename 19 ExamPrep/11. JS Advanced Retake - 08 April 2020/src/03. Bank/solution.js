class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        const {firstName, lastName, personalId} = customer;
        let person = this.allCustomers.find(c => c.personalId === personalId);
        if (person) {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }

        this.allCustomers.push({personalId, firstName, lastName, totalMoney: 0, transactions: []});

        return customer;
    }

    depositMoney(personalId, amount) {
        let person = this.allCustomers.find(c => c.personalId === personalId);

        if (!person) {
            throw new Error('We have no customer with this ID!');
        }

        person.totalMoney += amount;
        person.transactions.push({
            number: person.transactions.length + 1,
            type: 'made deposit of',
            amount
        })
        return `${person.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let person = this.allCustomers.find(c => c.personalId === personalId);

        if (!person) {
            throw new Error('We have no customer with this ID!');
        }

        if (person.totalMoney < amount) {
            throw new Error(`${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`)
        }

        person.totalMoney -= amount;
        person.transactions.push({
            number: person.transactions.length + 1,
            type: 'withdrew',
            amount
        })
        return `${person.totalMoney}$`;
    }

    customerInfo(personalId) {
        const person = this.allCustomers.find(c => c.personalId === personalId);

        if (!person) {
            throw new Error('We have no customer with this ID!');
        }
        const result = [];

        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${person.firstName} ${person.lastName}`);
        result.push(`Customer ID: ${personalId}`);
        result.push(`Total Money: ${person.totalMoney}$`);
        result.push(`Transactions:`);

        Object.values(person.transactions)
            .sort((a, b) => b.number - a.number)
            .map(t => `${t.number}. ${person.firstName} ${person.lastName} ${t.type} ${t.amount}$!`)
            .forEach(t => result.push(t));

        return result.join('\n').trim();
    }
}

// let bank = new Bank('SoftUni Bank');
//
// console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
// console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));
//
// bank.depositMoney(6233267, 250);
// console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596, 555);
//
// console.log(bank.withdrawMoney(6233267, 125));
//
// console.log(bank.customerInfo(6233267));
