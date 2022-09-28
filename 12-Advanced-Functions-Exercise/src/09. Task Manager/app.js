function solve() {
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');

    const [_,colOpen, colInProgress, colComplete] =
        Array.from(document.querySelectorAll('section'))
            .map(s=>s.children[1]);

    document.getElementById('add').addEventListener('click', addTask);

    function createElement(type, value, className) {
        const element =  document.createElement(type);
        element.textContent = value;
        if (className){
            element.classList.add(className);
        }
        return element
    }

    function addTask(ev) {
        ev.preventDefault();
        const article = document.createElement('article');
        article.appendChild(createElement('h3', task.value));
        article.appendChild(createElement('p', `Description: ${description.value}`));
        article.appendChild(createElement('p', `Due Date: ${date.value}`));

        const btnWrapper = document.createElement('div');
        btnWrapper.classList.add('flex');

        const btnStart = createElement('button', 'Start', 'green');
        const btnDelete = createElement('button', 'Delete', 'red');
        const btnFinish = createElement('button', 'Finish', 'orange');

        btnStart.addEventListener('click', startHandler);
        btnDelete.addEventListener('click', deleteHandler);
        btnFinish.addEventListener('click', finishHandler);

        btnWrapper.appendChild(btnStart);
        btnWrapper.appendChild(btnDelete);

        article.appendChild(btnWrapper);
        colOpen.appendChild(article);

        function startHandler() {
            btnStart.remove();
            btnWrapper.appendChild(btnFinish);
            colInProgress.appendChild(article);
        }

        function deleteHandler() {
            article.remove();
        }

        function finishHandler() {
            btnWrapper.remove();
            colComplete.appendChild(article);
        }
    }
}
