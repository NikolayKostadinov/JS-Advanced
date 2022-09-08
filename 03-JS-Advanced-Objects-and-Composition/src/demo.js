let car = {
    model: 'BMW',
    year: 2012,
    facelift: true,
    toString() {
        return `Model: ${this.model} Year: ${this.year} Facelift ${this.facelift}`;
    }
};


console.log(car.toString());