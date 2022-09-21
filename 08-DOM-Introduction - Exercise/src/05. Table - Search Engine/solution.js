function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const rows = Array.from(document.getElementsByTagName('tbody')[0].children);
        const searchedText = document.getElementById('searchField').value;

        rows.forEach(row => {
            if (Array.from(row.children)
                .some(cell => cell.textContent.match(searchedText))) {
                row.classList.add('select');
            } else {
                row.classList.remove('select');
            }
        });

        document.getElementById('searchField').value = '';
    }
}