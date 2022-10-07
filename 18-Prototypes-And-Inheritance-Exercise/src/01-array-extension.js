(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        return this.slice(n);
    }
    Array.prototype.take = function (n) {
        return this.slice(0, n);
    }
    Array.prototype.sum = function () {
        return this.reduce((acc, q) => acc + q, 0);
    }
    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
})()


let arr = [1, 2, 3, 4, 5];

console.log(arr.skip(3));

console.log(arr.take(3));

console.log(arr.sum());

console.log(arr.average());