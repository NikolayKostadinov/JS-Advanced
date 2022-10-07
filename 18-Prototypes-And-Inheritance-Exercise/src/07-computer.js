function createComputerHierarchy() {
    class Device {
        constructor(manufacturer) {
            if (this.constructor === Device) {
                throw new Error("Abstract classes can't be instantiated.");
            }
            this.manufacturer = manufacturer;
        }


        get manufacturer() {
            return this._manufacturer;
        }

        set manufacturer(value) {
            if (typeof value !== 'string') throw new TypeError('Manufacturer must be a valid string!');
            this._manufacturer = value;
        }
    }

    class Battery extends Device {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }

        get expectedLife() {
            return this._expectedLife;
        }

        set expectedLife(value) {
            if (typeof value !== 'number') throw new TypeError('ExpectedLife must be a valid number!');
            this._expectedLife = value;
        }
    }

    class Keyboard extends Device {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }


        get responseTime() {
            return this._responseTime;
        }

        set responseTime(value) {
            if (typeof value !== 'number') throw new TypeError('ResponseTime must be a valid number!');
            this._responseTime = value;
        }
    }

    class Monitor extends Device {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }


        get width() {
            return this._width;
        }

        set width(value) {
            if (typeof value !== 'number') throw new TypeError('Width must be a valid number!');
            this._width = value;
        }

        get height() {
            return this._height;
        }

        set height(value) {
            if (typeof value !== 'number') throw new TypeError('Height must be a valid number!');
            this._height = value;
        }
    }

    class Computer extends Device {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            super(manufacturer);
            if (this.constructor === Computer) {
                throw new Error("Abstract classes can't be instantiated.");
            }
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }


        get processorSpeed() {
            return this._processorSpeed;
        }

        set processorSpeed(value) {
            if (typeof value !== 'number') throw new TypeError('ProcessorSpeed must be a valid number!');
            this._processorSpeed = value;
        }

        get ram() {
            return this._ram;
        }

        set ram(value) {
            if (typeof value !== 'number') throw new TypeError('RAM must be a valid number!');
            this._ram = value;
        }

        get hardDiskSpace() {
            return this._hardDiskSpace;
        }

        set hardDiskSpace(value) {
            if (typeof value !== 'number') throw new TypeError('HardDiskSpace must be a valid number!');
            this._hardDiskSpace = value;
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }


        get weight() {
            return this._weight;
        }

        set weight(value) {
            if (typeof value !== 'number') throw new TypeError('Weight must be a valid number!');
            this._weight = value;
        }

        get color() {
            return this._color;
        }

        set color(value) {
            if (typeof value !== 'string') throw new TypeError('Width must be a valid string!');
            this._color = value;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (!(value instanceof Battery)) throw new TypeError('Width must be a valid instance of Battery!');
            this._battery = value;
        }
    }

    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor ) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (!(value instanceof Keyboard)) throw new TypeError('Keyboard must be a valid Keyboard!');
            this._keyboard = value;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (!(value instanceof Monitor)) throw new TypeError('Monitor must be a valid Monitor!');
            this._monitor = value;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

try{
    new Computer();
}catch (e){
    console.log(e.message);
}

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);


