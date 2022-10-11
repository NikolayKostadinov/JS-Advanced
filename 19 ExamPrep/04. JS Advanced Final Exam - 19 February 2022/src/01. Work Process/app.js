function solve() {
    let salarySum = 0;
    const inputs = getInputs();

    document.getElementById('add-worker')
        .addEventListener('click', onAddWorkerClick);

    function onAddWorkerClick(ev) {
        ev.preventDefault();
        if (!isValid()) return;
        createRow();
        clearInput();
    }

    function setInputsData(data) {
        Object.entries(inputs)
            .forEach(([name, input]) => input.value = data[name]);
    }

    function createRow() {
        const data = getData();
        data.salary = Number(data.salary);
        const tr = createElement('tr');
        tr.appendChild(createElement('td',data.fname));
        tr.appendChild(createElement('td',data.lname));
        tr.appendChild(createElement('td',data.email));
        tr.appendChild(createElement('td',data.birth));
        tr.appendChild(createElement('td',data.position));
        tr.appendChild(createElement('td',data.salary));
        const firedBtn = createElement('button', 'Fired', 'fired');
        const editBtn = createElement('button', 'Edit', 'edit');
        const tdAction = createElement('td');
        tdAction.appendChild(firedBtn);
        tdAction.appendChild(editBtn);
        tr.appendChild(tdAction);
        document.getElementById('tbody').appendChild(tr);
        salarySum += data.salary;
        document.getElementById('sum').textContent = salarySum.toFixed(2);

        editBtn.addEventListener('click', (ev)=>{
            ev.preventDefault();
            tr.remove();
            salarySum -= data.salary;
            document.getElementById('sum').textContent = salarySum.toFixed(2);
            setInputsData(data);
        });

        firedBtn.addEventListener('click', (ev)=>{
            ev.preventDefault();
            tr.remove();
            salarySum -= data.salary;
            document.getElementById('sum').textContent = salarySum.toFixed(2);
        });
    }

    function getInputs() {
        return Object.fromEntries(
            Array.from(document.querySelectorAll('input, textarea'))
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
            .every(i => i.value);
    }

    function clearInput() {
        Object.values(inputs).forEach(i => i.value = '');
    }
}
solve()
