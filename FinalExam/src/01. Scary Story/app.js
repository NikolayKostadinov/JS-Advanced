window.addEventListener("load", solve);

function solve() {
    const inputs = getInputs();

    let publishBtn = document.getElementById('form-btn');
    publishBtn
        .addEventListener('click', (ev) => {
            ev.preventDefault();
            if (!isValid()) return;
            const data = getData();
            clearInput();
            publishBtn.disabled = true;
            publishBtn.value = 'Publish';
            const row = createElement('li', '', 'story-info');
            const article = createElement('article','','', row);
            createElement('h4', `Name: ${data['first-name']} ${data['last-name']}`, '', article);
            createElement('p', `Age: ${data.age}`, '', article);
            createElement('p', `Title: ${data['story-title']}`, '', article);
            createElement('p', `Genre: ${data.genre}`, '', article);
            createElement('p', `${data.story}`, '', article);
            const btnSave = createElement('button', 'Save Story', 'save-btn', row);
            const btnEdit = createElement('button', 'Edit Story', 'edit-btn', row);
            const btnDelete = createElement('button', 'Delete Story', 'delete-btn', row);

            document.getElementById('preview-list').appendChild(row);

            btnEdit.addEventListener('click',()=>{
                row.remove();
                setInputsData(data);
                publishBtn.disabled = false;
            });

            btnDelete.addEventListener('click',()=>{
                row.remove();
                publishBtn.disabled = false;
            });

            btnSave.addEventListener('click', ()=>{
                document.getElementById('main').remove();
                const main = createElement('div');
                main.id = 'main';
                createElement('h1', 'Your scary story is saved!', '' ,main);
                document.querySelector('body').appendChild(main);
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
