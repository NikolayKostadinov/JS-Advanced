function setInputsData(data) {
    Object.entries(inputs)
        .forEach(([name, input]) => input.value = data[name]);
}

function getInputs() {
    return Object.fromEntries(
        Array.from(document.querySelectorAll('input, textarea, select'))
            .map(i => [i.id, i]));
}

function createElement(type, text, cssClass, parent) {
    const element = document.createElement(type);
    if (text) {
        element.textContent = text;
    }

    if (cssClass) {
        element.className = cssClass;
    }

    if(parent){
        parent.appendChild(element);
    }
    return element;
}

function getData() {
    return Object.fromEntries(
        Object.entries(inputs)
            .map(([name, input]) => [name, input.value])
    );
}

function isValid() {
    return Object.values(inputs)
            .every(i => i.value)
        &&(inputs['type-product'].value === 'Computer' || inputs['type-product'].value === 'Phone');
}

function clearInput() {
    Object.values(inputs).forEach(i => i.value = '');
}
