function solve() {
    document.querySelector('button')
        .addEventListener('click', addMovie);

    const ulMovies = document.querySelector('#movies ul');
    const ulArchive = document.querySelector('#archive ul');

    function addMovie(ev) {
        ev.preventDefault()
        const inputs = Array.from(document.getElementById('container').children)
            .slice(0, 3);
        const name = inputs[0].value;
        const hall = inputs[1].value;
        const ticketPrice = Number(inputs[2].value);

        if (name && hall && inputs[2].value && !isNaN(inputs[2].value)) {

            inputs.forEach(x => x.value = '');

            const li = createElement('li');
            li.appendChild(createElement('span', name));
            li.appendChild(createElement('strong', `Hall: ${hall}`));

            const div = createElement('div');
            div.appendChild(createElement('strong', ticketPrice.toFixed(2)));
            const input = createElement('input', '', '', 'Tickets Sold');
            const button = createElement('button', 'Archive');

            div.appendChild(input);
            div.appendChild(button);
            li.appendChild(div);

            button.addEventListener('click', noArchive);

            ulMovies.appendChild(li);

            function noArchive() {
                if (input.value && !isNaN(input.value)){
                    li.remove();
                    const liArchive = createElement('li');
                    liArchive.appendChild(createElement('span', name));
                    let totalPrice = ticketPrice * Number(input.value);
                    liArchive.appendChild(createElement('strong', `Total amount: ${totalPrice.toFixed(2)}`));
                    const button = createElement('button', 'Delete')
                    liArchive.appendChild(button);
                    button.addEventListener('click', onDelete);

                    ulArchive.appendChild(liArchive);

                    function onDelete() {
                        liArchive.remove();
                    }
                }
            }
        }
    }

    function createElement(type, value, className, placeholder) {
        const element = document.createElement(type);
        element.textContent = value;
        if (className) {
            element.classList.add(className);
        }
        if (placeholder) {
            element.placeholder = placeholder;
        }
        return element
    }

    Array.from(document.querySelectorAll('button'))
        .filter(x=>x.textContent ==='Clear')
        .forEach(btn=>btn.addEventListener('click', ()=>Array.from(ulArchive.children).forEach(li=>li.remove())));
}