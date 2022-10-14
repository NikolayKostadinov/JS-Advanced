window.addEventListener('load', solve);

function solve() {
    let totalPrice = 0;
    const inputs = getInputs();
    console.log(inputs);

    document.getElementById('add')
        .addEventListener('click', onAddClick);

    function onAddClick(ev) {
        ev.preventDefault();
        if (!isValid()) return;

        const data = getData();
        data.year = Number(data.year);
        data.price = Number(data.price);

        const infoRow = createElement('tr', '', 'info');
        infoRow.appendChild(createElement('td', data.model));
        infoRow.appendChild(createElement('td', data.price.toFixed(2)));
        const actions = createElement('td');
        const moreBtn = createElement('button', 'More Info', 'moreBtn');
        const buyBtn = createElement('button', 'Buy it', 'buyBtn');
        actions.appendChild(moreBtn);
        actions.appendChild(buyBtn);
        infoRow.appendChild(actions);

        const moreInfoRow = createElement('tr', '', 'hide');
        moreInfoRow.appendChild(createElement('td', `Year: ${data.year}`));
        const cell = createElement('td', `Description: ${data.description}`)
        cell.colSpan = 3;
        moreInfoRow.appendChild(cell);
        let furnitureList = document.getElementById('furniture-list');
        furnitureList.appendChild(infoRow);
        furnitureList.appendChild(moreInfoRow);

        moreBtn.addEventListener('click', (ev) => {
            ev.preventDefault();
            if (moreBtn.textContent === 'More Info') {
                moreBtn.textContent = 'Less Info';
                moreInfoRow.style.display = 'contents';
            } else {
                moreBtn.textContent = 'More Info';
                moreInfoRow.style.display = 'none';
            }
        });

        buyBtn.addEventListener('click', () => {
            ev.preventDefault();
            infoRow.remove();
            moreInfoRow.remove();
            totalPrice += data.price;
            document.querySelector('.total-price').textContent = totalPrice.toFixed(2)
        });
    }

    //TO DO
    function setInputsData(data) {
        Object.entries(inputs)
            .forEach(([name, input]) => input.value = data[name]);
    }

    function getInputs() {
        return Object.fromEntries(
            Array.from(document.querySelectorAll('input, textarea, select'))
                .map(i => [i.id, i]));
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

    function getData() {
        return Object.fromEntries(
            Object.entries(inputs)
                .map(([name, input]) => [name, input.value])
        );
    }

    function isValid() {
        return Object.values(inputs)
                .every(i => i.value)
            && (!inputs.year.value.isNaN && Number(inputs.year.value) > 0)
            && (!inputs.price.value.isNaN && Number(inputs.price.value) > 0);
    }

    function clearInput() {
        Object.values(inputs).forEach(i => i.value = '');
    }
}
