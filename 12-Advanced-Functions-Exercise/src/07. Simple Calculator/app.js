function calculator() {
    let element1;
    let element2;
    let resultElement;

    function init(selector1, selector2, resultSelector) {
        element1 = document.querySelector(selector1);
        element2 = document.querySelector(selector2);
        resultElement = document.querySelector(resultSelector);
    }

    function add() {
        resultElement.value = Number(element1.value) + Number(element2.value);
    }

    function subtract() {
        resultElement.value = Number(element1.value) - Number(element2.value);
    }

    return {
        init, add, subtract
    };
}




