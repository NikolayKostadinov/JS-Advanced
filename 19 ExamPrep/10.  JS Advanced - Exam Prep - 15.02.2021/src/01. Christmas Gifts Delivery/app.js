function solution() {
    const input = document.querySelector('input');
    const lists = Array.from(document.querySelectorAll('section ul'));
    document.querySelector('button')
        .addEventListener('click', function (ev) {
            ev.preventDefault();
            const list = lists[0];
            const row = createElement('li', input.value, 'gift', list);
            const sendBtn = createElement('button', 'Send', '', row);
            sendBtn.id = 'sendButton';
            const discardBtn = createElement('button', 'Discard', '', row);
            discardBtn.id = 'discardButton';
            input.value = '';
            const rows = Array.from(lists[0].querySelectorAll('li'));
            rows.sort((a, b) => a.textContent.localeCompare(b.textContent))
                .forEach(li => list.appendChild(li));

            sendBtn.addEventListener('click', function (ev) {
                ev.preventDefault();
                sendBtn.remove();
                discardBtn.remove();
                lists[1].appendChild(row);
            });

            discardBtn.addEventListener('click', function (ev) {
                ev.preventDefault();
                sendBtn.remove();
                discardBtn.remove();
                lists[2].appendChild(row);
            });
        });

    function setInputsData(data) {
        Object.entries(inputs)
            .forEach(([name, input]) => input.value = data[name]);
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
