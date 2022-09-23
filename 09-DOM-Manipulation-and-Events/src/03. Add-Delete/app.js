function addItem() {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    aElement.href = '#';
    aElement.textContent = '[Delete]'
    aElement.addEventListener('click', deleteItem,false);

    const inputElement = document.getElementById('newItemText');
    liElement.textContent = inputElement.value;
    liElement.appendChild(aElement);

    document.getElementById('items').appendChild(liElement);
    inputElement.value = '';

    function deleteItem(ev){
        ev.target.parentElement.remove();
    }
}