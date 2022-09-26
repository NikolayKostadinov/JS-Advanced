function solve() {
    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');
    const tableBody = document.querySelector('tbody');
    const furnitureList = {};

    buttons[0].addEventListener('click', generateRecord);
    buttons[1].addEventListener('click', buyFurniture);

    function generateRecord() {
        JSON.parse(textAreas[0].value).forEach(furniture => {
            const tr = document.createElement('tr');
            const tdImage = document.createElement('td');
            const img = document.createElement('img');
            img.src = furniture.img;
            tdImage.appendChild(img);
            tr.appendChild(tdImage);

            const tdName = document.createElement('td');
            tdName.textContent = furniture.name;
            tr.appendChild(tdName);

            const tdPrice = document.createElement('td');
            tdPrice.textContent = furniture.price;
            tr.appendChild(tdPrice);

            const tdDecFactor = document.createElement('td');
            tdDecFactor.textContent = furniture.decFactor;
            tr.appendChild(tdDecFactor);

            const tdMark = document.createElement('td');
            const markElement = document.createElement('input');
            markElement.type = 'checkbox';
            tdMark.appendChild(markElement);
            tr.appendChild(tdMark);

            tableBody.appendChild(tr);
        });
    }

    function parseTable() {
        const rows = Array.from(document.querySelectorAll('tbody tr'));
        return rows.map(r => {
            const cols = r.children;
            return {
                name: cols[1].textContent,
                price: Number(cols[2].textContent),
                decFactor: Number(cols[3].textContent),
                selected: cols[4].querySelector('input[type="checkbox"]').checked
            }
        }).filter(f => f.selected);
    }

    function buyFurniture() {
        const furnitureList = parseTable();
        const names = furnitureList.map(f => f.name).join(', ')
        const totalPrice = furnitureList.reduce((p, q) => p + q.price, 0);
        const decFactor = furnitureList.reduce((p, q) => p + q.decFactor, 0) / furnitureList.length;

        let message = `Bought furniture: ${names}\n`;
        message += `Total price: ${totalPrice.toFixed(2)}\n`;
        message += `Average decoration factor: ${decFactor}`;
        textAreas[1].value = message;
    }
}