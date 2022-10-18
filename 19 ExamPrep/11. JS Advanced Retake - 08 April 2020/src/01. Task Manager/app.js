function solve() {
    const inputs = getInputs();
    const sections = Array.from(document.querySelectorAll('section div:nth-child(2)')).slice(1);
    console.log(inputs);

    document.getElementById('add')
        .addEventListener('click', (ev) => {
            ev.preventDefault();
            if (!isValid()) return;
            const data = getData();
            clearInput();
            const article = createElement('article');
            createElement('h3', data.task, '', article);
            createElement('p', `Description: ${data.description}`, '', article);
            createElement('p', `Due Date: ${data.date}`, '', article);
            const flex = createElement('div', '', 'flex', article);
            const startBtn = createElement('button', 'Start', 'green', flex);
            const deleteBtn = createElement('button', 'Delete', 'red', flex);
            sections[0].appendChild(article);

            deleteBtn.addEventListener('click', (ev) => {
                ev.preventDefault();
                article.remove();
            });

            startBtn.addEventListener('click', (ev) => {
                ev.preventDefault();
                startBtn.remove();
                const finishBtn = createElement('button', 'Finish', 'orange', flex);
                sections[1].appendChild(article);

                finishBtn.addEventListener('click', (ev)=>{
                    ev.preventDefault();
                    flex.remove();
                    sections[2].appendChild(article);
                });
            });
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

    function createElement(type, text, cssClass, parent) {
        const element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }

        if (cssClass) {
            element.className = cssClass;
        }

        if (parent) {
            parent.appendChild(element);
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
