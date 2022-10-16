function solve() {

    const inputs = getInputs();
    const archive = [];

    document.querySelector('.btn.create')
        .addEventListener('click', function (ev) {
            ev.preventDefault();
            const data = getData();
            clearInput();
            const article = createElement('article');
            article.appendChild(createElement('h1', data.title));

            const category = createElement('p', 'Category: ');
            category.appendChild(createElement('strong', data.category));
            article.appendChild(category);

            const creator = createElement('p', 'Creator: ');
            creator.appendChild(createElement('strong', data.creator));
            article.appendChild(creator);

            article.appendChild(createElement('p', data.content));

            const buttons = createElement('div', '', 'buttons');
            const deleteBtn = createElement('button', 'Delete', 'btn delete');
            const archiveBtn = createElement('button', 'Archive', 'btn archive');
            buttons.appendChild(deleteBtn);
            buttons.appendChild(archiveBtn);

            article.appendChild(buttons);

            document.querySelector('main>section').appendChild(article);

            deleteBtn.addEventListener('click', (ev) => {
                ev.preventDefault();
                article.remove();
            });

            archiveBtn.addEventListener('click', (ev) => {
                ev.preventDefault();
                const ol = document.querySelector('ol');
                ol.appendChild(createElement('li', data.title));
                Array.from(ol.querySelectorAll('li'))
                    .sort((a, b) =>
                        a.textContent.localeCompare(b.textContent)).forEach(li => ol.appendChild(li))
                article.remove();
            });
        });

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
