function colorize() {
    Array.from(document.querySelectorAll('tr:nth-child(even)'))
    .forEach(tr=>tr.style.backgroundColor='teal');
}