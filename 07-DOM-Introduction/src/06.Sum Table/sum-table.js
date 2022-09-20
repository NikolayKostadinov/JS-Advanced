function sumTable() {
    const table = document.querySelector('table');
    const rows = Array.from(table.querySelectorAll('tr')).slice(1, - 1);
    let sum = rows.reduce((sum, curr) => {
        const cell = curr.querySelector('td:last-child');
        sum += Number(cell.textContent);
        return sum
    }, 0);

     document.getElementById('sum').textContent = sum;
}