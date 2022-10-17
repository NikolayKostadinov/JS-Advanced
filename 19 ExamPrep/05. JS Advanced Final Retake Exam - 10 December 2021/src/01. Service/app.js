window.addEventListener('load', solve);

function solve() {

    const inputs = getInputs();

    document.querySelector('button')
        .addEventListener('click', onSendClick);

    function onSendClick(ev) {
        ev.preventDefault();
        if (!isValid()) return;
        const data = getData();
        const div = createElement('div', '', 'container');
        div.appendChild(createElement('h2', `Product type for repair: ${data['type-product']}`));
        div.appendChild(createElement('h3', `Client information: ${data['client-name']}, ${data['client-phone']}`));
        div.appendChild(createElement('h4', `Description of the problem: ${data.description}`));
        const startBtn = createElement('button', 'Start repair', 'start-btn')
        const finishBtn = createElement('button', 'Finish repair', 'finish-btn');
        finishBtn.disabled = true;
        div.appendChild(startBtn);
        div.appendChild(finishBtn);
        document.getElementById('received-orders').appendChild(div);
        clearInput();

        startBtn.addEventListener('click', (ev)=>{
            ev.preventDefault();
            startBtn.disabled = true;
            finishBtn.disabled = false;
        });

        finishBtn.addEventListener('click', (ev)=>{
            document.getElementById('completed-orders').appendChild(div);
            startBtn.remove();
            finishBtn.remove();
        });
    }

    document.querySelector('button.clear-btn')
        .addEventListener('click',(ev)=>{
           ev.preventDefault();
           Array.from(ev.target.parentElement.querySelectorAll('.container'))
               .forEach(c=>c.remove());
        });


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
            &&(inputs['type-product'].value === 'Computer' || inputs['type-product'].value === 'Phone');
    }

    function clearInput() {
        Object.values(inputs).forEach(i => i.value = '');
    }
}
