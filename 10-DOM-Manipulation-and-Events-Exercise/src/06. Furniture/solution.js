function solve() {
    const [inputArea, outputArea] = document.querySelectorAll('textarea');
    const [generateBtn, buyFurnitureBtn] = document.querySelectorAll('button');
    const tableBody = document.querySelector('tbody');
    const furnitureList = [];

    generateBtn.addEventListener('click', generateRecord);
    buyFurnitureBtn.addEventListener('click', buyFurniture);

    function generateCell(type, value) {
        const td = document.createElement('td');
        const childElement = document.createElement(type);
        td.appendChild(childElement);

        if (type === 'img') {
            childElement.src = value;
        } else if (type === 'p') {
            childElement.textContent = value;
        } else if (type ==='input'){
            childElement.type = 'checkbox';
        }

        return td;
    }

    function generateRecord() {
        JSON.parse(inputArea.value).forEach(furniture => {
            const tr = document.createElement('tr');

            tr.appendChild(generateCell('img', furniture.img));
            tr.appendChild(generateCell('p', furniture.name));
            tr.appendChild(generateCell('p', furniture.price));
            tr.appendChild(generateCell('p', furniture.decFactor));
            const td = generateCell('input');
            tr.appendChild(td);

            const checkbox = td.children[0];
            function isChecked(){
                return checkbox.checked;
            }

            furnitureList.push({...furniture, isChecked})
            tableBody.appendChild(tr);
        });
    }



    function buyFurniture() {
        const slected = furnitureList
        .filter(f=>f.isChecked());
        const names = slected.map(f=>f.name).join(', ');
        const totalPrice = slected.reduce((p, q) => p + q.price, 0);
        const decFactor = slected.reduce((p, q) => p + q.decFactor, 0) / slected.length;

        let message = `Bought furniture: ${names}\n`;
        message += `Total price: ${totalPrice.toFixed(2)}\n`;
        message += `Average decoration factor: ${decFactor}`;
        outputArea.value = message;
    }
}