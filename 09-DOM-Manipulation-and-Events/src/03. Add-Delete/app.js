function addItem() {
    const inputElement = document.getElementById('newItemText');
 
    const aElement = document.createElement('a');
    aElement.href = '#';
    aElement.textContent = '[Delete]'
    aElement.addEventListener('click', deleteItem,false);

    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    liElement.appendChild(aElement);

    document.getElementById('items').appendChild(liElement);
    inputElement.value = '';

    function deleteItem(ev){
        ev.target.parentElement.remove();
    }
}