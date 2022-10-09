class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = {};
        this.storage = {};
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable - spaceRequired < 0) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants[plantName] = {spaceRequired, ripe: false, quantity: 0};
        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        if (!this.plants.hasOwnProperty(plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (this.plants[plantName].ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        this.plants[plantName].ripe = true;
        this.plants[plantName].quantity = quantity;

        return (quantity === 1) ? `${quantity} ${plantName} has successfully ripened.`
            : `${quantity} ${plantName}s have successfully ripened.`
    }

    harvestPlant(plantName) {
        if (!this.plants.hasOwnProperty(plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (!this.plants[plantName].ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        if (!this.storage.hasOwnProperty(plantName)) {
            this.storage[plantName] = 0;
        }
        this.storage[plantName] += this.plants[plantName].quantity;
        this.spaceAvailable += this.plants[plantName].spaceRequired;
        delete this.plants[plantName];
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        return `The garden has ${this.spaceAvailable} free space left.\n` +
            'Plants in the garden: ' +
            Object.keys(this.plants)
                .sort((a, b) => a.localeCompare(b))
                .join(', ') +'\n' +
            ((this.storage.length === 0) ? 'Plants in storage: The storage is empty.'
            : 'Plants in storage: ' +
            Object.entries(this.storage)
                .map(([name, quantity] )=> `${name} (${quantity})`)
                .join(', '));
    }
}

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));
//
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
//console.log(myGarden.ripenPlant('cucumber', -5));
//Testing generateReport

let myGarden = new Garden(250);

myGarden.addPlant("apple", 20)
myGarden.addPlant("orange", 200)
myGarden.addPlant("raspberry", 10)
myGarden.ripenPlant("apple", 10);
myGarden.ripenPlant("orange", 1);
myGarden.harvestPlant("orange");
console.log(myGarden.generateReport());
