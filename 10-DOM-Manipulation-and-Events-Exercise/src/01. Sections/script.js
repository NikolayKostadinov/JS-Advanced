function create(words) {
    const content = document.getElementById('content');

    words.forEach(w => {
        const div = document.createElement('div');
        div.addEventListener('click', onClick);

        const p = document.createElement('p');
        p.textContent = w;
        p.style.display = 'none';

        div.appendChild(p);
        content.appendChild(div);
    });

    function onClick(ev) {
        ev.target.querySelector('p').style.display='block';
    }
}
