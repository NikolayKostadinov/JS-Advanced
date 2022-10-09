window.addEventListener("load", solve);

function solve() {
    const inputs = {
        make: document.getElementById('make'),
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        fuel: document.getElementById('fuel'),
        originalCost: document.getElementById('original-cost'),
        sellingPrice: document.getElementById('selling-price')
    }

    let profit = 0;

    document.getElementById('publish').addEventListener('click', onClick);

    function onClick(ev) {
        ev.preventDefault();
        if (isValid()) {
            addRowToTable();
            clearAll();
        }
    }

    function addRowToTable() {
        const data = Object.fromEntries(Object.entries(inputs)
            .map(([name, input]) => [name, input.value])
        );

        const tableBody = document.getElementById('table-body');
        const tr = createElement('tr', null, 'row');
        tr.appendChild(createElement('td', inputs.make.value));
        tr.appendChild(createElement('td', inputs.model.value));
        tr.appendChild(createElement('td', inputs.year.value));
        tr.appendChild(createElement('td', inputs.fuel.value));
        tr.appendChild(createElement('td', inputs.originalCost.value));
        tr.appendChild(createElement('td', inputs.sellingPrice.value));
        const tdAction = createElement('td');
        const editBtn = createElement('button', 'Edit', 'action-btn edit');
        const sellBtn = createElement('button', 'Sell', 'action-btn sell');
        tdAction.appendChild(editBtn);
        tdAction.appendChild(sellBtn);
        tr.appendChild(tdAction);
        tableBody.appendChild(tr);

        editBtn.addEventListener('click', (ev) => {
            tr.remove();
            Object.entries(inputs)
                .forEach(([name, input]) => {
                    input.value = data[name];
                })
        });

        sellBtn.addEventListener('click', (ev) => {
            tr.remove();
            const ul = document.getElementById('cars-list');
            const li = createElement('li', null, 'each-list');
            li.appendChild(createElement('span', data.make + ' ' + data.model));
            li.appendChild(createElement('span', data.year));
            li.appendChild(createElement('span', Number(data.sellingPrice) - Number(data.originalCost)));
            ul.appendChild(li);
            profit += Number(data.sellingPrice) - Number(data.originalCost);

            document.getElementById('profit').textContent = profit.toFixed(2);
        });
    }

    function createElement(type, text, cssClass) {
        const element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }

        if (cssClass) {
            element.className = cssClass;
        }
        return element;
    }

    function isValid() {
        return Object
                .values(inputs)
                .some(input => input && input.value && input.value !== '')
            && Number(inputs.originalCost.value) <= Number(inputs.sellingPrice.value);
    }

    function clearAll() {
        Object.values(inputs).forEach(input => input.value = '');
    }
}
