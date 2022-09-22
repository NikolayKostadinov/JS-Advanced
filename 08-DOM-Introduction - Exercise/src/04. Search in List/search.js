function search() {
    const items = Array.from(document.getElementsByTagName('li'))
    const searchedText = document.getElementById('searchText').value;
    let count = 0;
    const matches = items.map(
        el => {
            el.style.fontWeight = 'normal';
            el.style.textDecoration = '';
            if (el.textContent.match(searchedText)) {
                count++;
                el.style.fontWeight = 'bold';
                el.style.textDecoration = 'underline';
            }
            return el;
        });
    document.getElementById('result').textContent = `${count} matches found`;
}
