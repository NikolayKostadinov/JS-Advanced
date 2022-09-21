function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const rows = Array.from(document.getElementsByTagName('tbody')[0].children);
        clearSelected(rows)

        const searchedText = document.getElementById('searchField').value;

        rows.filter(row => Array.from(row.children)
            .some(cell => cell.textContent.indexOf(searchedText) >= 0)
        ).forEach(r => r.classList.add('select'))

        document.getElementById('searchField').value = '';
    }

    function clearSelected(rows) {
        rows.forEach(r => r.classList.remove('select'));
    }
}