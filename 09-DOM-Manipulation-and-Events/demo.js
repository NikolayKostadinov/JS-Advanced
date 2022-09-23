document.querySelector('button').addEventListener("click", sort, false);

function sort() {
    const ul = document.querySelector('ul');
    Array.from(ul.children)
        .sort((a, b) => Number(a.textContent) - Number(b.textContent))
        .forEach(li => ul.appendChild(li));
}