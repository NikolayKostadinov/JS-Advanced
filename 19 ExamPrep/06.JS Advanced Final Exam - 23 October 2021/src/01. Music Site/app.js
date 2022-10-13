window.addEventListener('load', solve);

function solve() {
    let totalLikes = 0
    const inputs = getInputs();

    document.getElementById('add-btn')
        .addEventListener('click', onAddClick);

    function onAddClick(ev) {
        ev.preventDefault();
        if (!isValid()) return;
        const data = getData();
        clearInput();
        const div = createElement('div', '', 'hits-info');
        const img = document.createElement('img');
        img.src = './static/img/img.png';
        div.appendChild(img);
        div.appendChild(createElement('h2', `Genre: ${data.genre}`))
        div.appendChild(createElement('h2', `Name: ${data.name}`))
        div.appendChild(createElement('h2', `Author: ${data.author}`))
        div.appendChild(createElement('h3', `Date: ${data.date}`))
        const saveBtn = createElement('button', 'Save song', 'save-btn');
        const likeBtn = createElement('button', 'Like song', 'like-btn');
        const deleteBtn = createElement('button', 'Delete', 'delete-btn');
        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(deleteBtn);

        document.querySelector('.all-hits-container').appendChild(div);

        likeBtn.addEventListener('click', (ev) => {
            ev.preventDefault();
            likeBtn.disabled = true;
            totalLikes++;
            document.querySelector('div.likes p').textContent = `Total Likes: ${totalLikes}`;
        });

        saveBtn.addEventListener('click', (ev)=>{
            ev.preventDefault();
            likeBtn.remove();
            saveBtn.remove();
            document.querySelector('div.saved-container').appendChild(div);
        });

        deleteBtn.addEventListener('click', (ev)=>{
            ev.preventDefault();
            div.remove();
        });
    }

    function setInputsData(data) {
        Object.entries(inputs)
            .forEach(([name, input]) => input.value = data[name]);
    }

    function getInputs() {
        return Object.fromEntries(Array.from(document.querySelectorAll('input, textarea, select'))
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
        return Object.fromEntries(Object.entries(inputs)
            .map(([name, input]) => [name, input.value]));
    }

    function isValid() {
        return Object.values(inputs)
            .every(i => i.value);
    }

    function clearInput() {
        Object.values(inputs).forEach(i => i.value = '');
    }
}
