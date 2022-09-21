function search() {
    const items = Array.from(document.getElementsByTagName('li'))
    items.forEach(el => {
        el.style.fontWeight = '';
        el.style.textDecoration = '';
    });
    const searchedText = document.getElementById('searchText').value;
    const matches = items.filter(x => x.textContent.indexOf(searchedText) >= 0)
        .map(
            el => {
                el.style.fontWeight = 'bold';
                el.style.textDecoration = 'underline';
                return el;
            });
    document.getElementById('result').textContent = `${matches.length} matches found`;
}
