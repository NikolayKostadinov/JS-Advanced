function addItem() {
    const selectElement = document.getElementById('menu');
    const textElement = document.getElementById('newItemText');
    const valueElement = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.value = valueElement.value;
    option.text =textElement.value;

    selectElement.appendChild(option);

    textElement.value = '';
    valueElement.value = '';
}