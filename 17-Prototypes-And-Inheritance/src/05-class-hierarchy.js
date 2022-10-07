function classHierarchy() {
    class Figure {
        #units;
        #ratios = {
            m: 1 / 10,
            cm: 1,
            mm: 10
        }

        constructor(units = 'cm') {
            this.changeUnits(units);
        }

        changeUnits(units) {
            this.#units = units;
        }

        toString() {
            return `Figures units: ${this.#units}`;
        }

        get ratio() {
            return this.#ratios[this.#units];
        }
    }

    class Circle extends Figure {
        #radius;
        constructor(radius, units = 'cm') {
            super(units);
            this.#radius = radius;
        }


        get radius() {
            return this.#radius * this.ratio;
        }

        get area() {
            return Math.PI * this.radius ** 2;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        #height;
        #width;
        constructor(width, height, units = 'cm') {
            super(units);
            this.#width = width;
            this.#height = height;
        }


        get width() {
            return this.#width * this.ratio;
        }

        get height() {
            return this.#height * this.ratio;
        }

        get area() {
            return this.width * this.height
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

const {
    Figure,
    Circle,
    Rectangle
} = classHierarchy();


let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50

