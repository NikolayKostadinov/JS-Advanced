function solve() {
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons[0].addEventListener('click', quickCheck);
    buttons[1].addEventListener('click', clear);
    let checkElement = document.querySelector('#check p');
    let tableElement = document.querySelector('#exercise table');

    function readTable() {
        return Array.from(document.querySelectorAll('tbody tr'))
            .map(tr => Array.from(tr.children).map(x => Number(x.children[0].value)));
    }

    function quickCheck() {
        const table = readTable();
        let result = true;
        let sum = table[0][0] + table[0][1] + table[0][2];
        for (let i = 0; i < table.length; i++) {
            result &= table[i][0] !== table[i][1] && table[i][0] !== table[i][2];
            result &= table[0][i] !== table[1][i] && table[0][i] !== table[2][i];
            result &= table[i][0] + table[i][1] + table[i][2] === sum;
            result &= table[0][i] + table[1][i] + table[2][i] === sum;
        }
        if (result) {
            checkElement.textContent = 'You solve it! Congratulations!';
            checkElement.style.color = 'green';
            tableElement.style.border = '2px solid green';
        } else {
            checkElement.textContent = 'NOP! You are not done yet...';
            checkElement.style.color = 'red';
            tableElement.style.border = '2px solid red';
        }
    }

    function clear() {
        Array.from(document.querySelectorAll('tbody tr td input'))
            .forEach(e => e.value = '');
        tableElement.style.border = 'none';
        checkElement.textContent = '';
        checkElement.style.color = '';
    }
}