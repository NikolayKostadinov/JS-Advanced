function solve() {
    const colOpen = document.querySelector('h1.orange').parentNode.parentNode.children[1];
    const colInProgress = document.querySelector('h1.yellow').parentNode.parentNode.children[1];
    const colComplete = document.querySelector('h1.green').parentNode.parentNode.children[1];
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');

    document.getElementById('add').addEventListener('click', addTask);

    function createElement(type, value, className) {
        const element =  document.createElement(type);
        element.textContent = value;
        if (className){
            element.classList.add(className);
        }
        return element
    }

    function deleteHandler(ev) {
        ev.target.parentElement.parentElement.remove();
    }

    function finishHandler(ev) {
        const article = ev.target.parentElement.parentElement;
        const btnWrapper = article.querySelector('div.flex');
        btnWrapper.remove();
        colComplete.appendChild(article);
    }

    function startHandler(ev) {
        const article = ev.target.parentElement.parentElement;
        
        const btnWrapper = article.querySelector('div.flex')
        btnWrapper.querySelector('button').remove();

        const btnFinish = createElement('button', 'Finish', 'orange');
        btnFinish.addEventListener('click', finishHandler);

        btnWrapper.appendChild(btnFinish);
        colInProgress.appendChild(article);
    }

    function createButtons() {
        const div = document.createElement('div');
        div.classList.add('flex');

        const btnStart = createElement('button', 'Start', 'green');
        btnStart.addEventListener('click', startHandler);

        const btnDelete = createElement('button', 'Delete', 'red');
        btnDelete.addEventListener('click', deleteHandler);

        div.appendChild(btnStart);
        div.appendChild(btnDelete);

        return div;
    }

    function addTask(ev) {
        ev.preventDefault();
        const article = document.createElement('article');
        article.appendChild(createElement('h3', task.value));
        article.appendChild(createElement('p', `Description: ${description.value}`));
        article.appendChild(createElement('p', `Due Date: ${date.value}`));
        article.appendChild(createButtons());

        colOpen.appendChild(article);
    }
}