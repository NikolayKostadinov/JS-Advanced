function add(acc) {
    function sum(a) {
        acc += a;
        return sum;
    }

    sum.toString = function () {
        return acc.toString();
    }

    return sum;
}

console.log(add(1)(6)(-3).toString());