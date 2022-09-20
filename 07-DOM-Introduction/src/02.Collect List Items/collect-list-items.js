function extractText() {
    const list = document.getElementById('items');
    const innerLis = Array.from(list.children);
    const result = document.getElementById('result');
    result.value = innerLis.map(e=>e.textContent).join('\n');
}