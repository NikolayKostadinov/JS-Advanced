function solve() {
    const inputs = Object.fromEntries(
        Array.from(document.querySelectorAll('input, textarea'))
            .map(i => [i.id, i]));

    const addBtn = document.getElementById('add');

    function onResetClick(ev) {
        ev.preventDefault();
        clearInput();
    }

    document.getElementById('reset').addEventListener('click', onResetClick);

    addBtn.addEventListener('click', onAddClick);

    function onAddClick(ev) {
        ev.preventDefault();
        if (!isValid()) return;

        let data = getData();
        const li = getElements();
        document.getElementById('list').appendChild(li);
        clearInput();


        function getElements() {
            const li = createElement('li');
            li.appendChild(createElement('h4', `Title: ${data.title}`));
            li.appendChild(createElement('h4', `Recipient Name: ${data.recipientName}`));
            li.appendChild(createElement('span', data.message));
            const div = createElement('div', '', 'list-action');
            const sendBtn = createElement('button', 'Send');
            sendBtn.id = 'send';
            sendBtn.type = 'submit';
            const deleteBtn = createElement('button', 'Delete');
            deleteBtn.id = 'delete';
            deleteBtn.type = 'submit';
            div.appendChild(sendBtn);
            div.appendChild(deleteBtn);
            li.appendChild(div);

            sendBtn.addEventListener('click', onSendClick)
            deleteBtn.addEventListener('click', (ev) => {
                ev.preventDefault();
                li.remove();
                const sent = createElement('li');
                sent.appendChild(createElement('span', `To: ${data.recipientName}`));
                sent.appendChild(createElement('span', `Title: ${data.title}`));
                document.querySelector('.delete-list').appendChild(sent);
            })

            function onSendClick() {
                const sent = createElement('li');
                sent.appendChild(createElement('span', `To: ${data.recipientName}`));
                sent.appendChild(createElement('span', `Title: ${data.title}`));
                const sentDiv = createElement('div', '', 'btn');
                const sentDeleteBtn = createElement('button', 'Delete', 'delete');
                sentDeleteBtn.type = 'submit';
                sentDiv.appendChild(sentDeleteBtn);
                sent.appendChild(sentDiv);
                sentDeleteBtn.addEventListener('click', (ev) => {
                    ev.preventDefault();
                    sentDiv.remove();
                    document.querySelector('.delete-list').appendChild(sent);
                })
                li.remove();
                document.querySelector('.sent-list').appendChild(sent);
            }

            return li;
        }
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