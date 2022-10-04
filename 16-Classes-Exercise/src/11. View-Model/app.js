class Textbox {
    _value;
    _elements;
    _invalidSymbols;

    constructor(selector, regex) {
        this._elements = document.querySelectorAll(selector);
        this.elements
            .forEach(element =>
                element.addEventListener('input', (ev) => {
                    this.elements
                        .forEach(element => element.value = ev.target.value);
                }))
        this._invalidSymbols = regex;
    }

    get elements() {
        return Array.from(this._elements);
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        this.elements.forEach(el => el.value = value);
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

Array.from(inputs).forEach(input =>
    input.addEventListener('click', function () {
        console.log(textbox.value);
    }));
