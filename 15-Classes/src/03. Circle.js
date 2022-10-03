class Circle {
    #radius;

    constructor(radius) {
        this.#radius = radius;
    }

    get radius() {
        return this.#radius;
    }

    set radius(value) {
        this.#radius = value;
    }

    get diameter() {
        return 2 * this.radius;
    }

    set diameter(value) {
        this.#radius = value / 2;
    }

    get area() {
        return Math.PI * (this.#radius ** 2);
    }
}

let circle = new Circle(4);
console.log(circle.radius, circle.diameter);
circle.radius = 5;
console.log(circle.radius, circle.diameter);