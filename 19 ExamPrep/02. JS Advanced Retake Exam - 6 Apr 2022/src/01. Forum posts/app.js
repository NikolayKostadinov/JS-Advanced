window.addEventListener("load", solve);

function solve() {
    const inputs = {
        title: document.getElementById('post-title'),
        category: document.getElementById('post-category'),
        content: document.getElementById('post-content'),
    }

    document.getElementById('publish-btn')
        .addEventListener('click', (ev) => {
            ev.preventDefault();
            if (isValid()) {
                fillPostReview();
                clearAll();
            }
        });

    function fillPostReview() {
        const data = {};
        Object
            .entries(inputs)
            .forEach(([name, input]) => data[name] = input.value);

        const rpost = createElement('li', '', 'rpost');
        const article = createElement('article');
        article.appendChild(createElement('h4', data.title))
        article.appendChild(createElement('p', `Category: ${data.category}`))
        article.appendChild(createElement('p', `Content: ${data.content}`))
        rpost.appendChild(article);

        const editBtn = createElement('button', 'Edit', 'action-btn edit');
        const approveBtn = createElement('button', 'Approve', 'action-btn approve');
        rpost.appendChild(editBtn);
        rpost.appendChild(approveBtn);

        editBtn.addEventListener('click', () => {
            rpost.remove();
            Object.entries(inputs)
                .forEach(([name, input]) => input.value = data[name]);
        })

        approveBtn.addEventListener('click', () => {
            editBtn.remove();
            approveBtn.remove();
            document.getElementById('published-list')
                .appendChild(rpost);
        })
        document.getElementById('review-list').appendChild(rpost);

        document.getElementById('clear-btn')
            .addEventListener('click', () => {
                rpost.remove()
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
            .every(input => input.value);
    }

    function clearAll() {
        Object.values(inputs).forEach(input => input.value = '');
    }
}
