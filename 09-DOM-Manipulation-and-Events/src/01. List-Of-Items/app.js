function addItem() {
    const liElement = document.createElement('li');
    const inputElement = document.getElementById('newItemText');
    liElement.textContent = inputElement.value;
    inputElement.value = '';
    document.getElementById('items').appendChild(liElement);
}