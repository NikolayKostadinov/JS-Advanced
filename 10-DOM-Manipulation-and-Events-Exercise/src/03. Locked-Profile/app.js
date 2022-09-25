function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(btn => btn.addEventListener('click', toggle));

    function toggle(ev) {
        let target = ev.target;
        const profile = target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        if (isActive) {
            const div = profile.querySelector('div');
            if (target.textContent === 'Show more') {
                target.textContent = 'Hide it'
                div.style.display = 'block'
            } else {
                target.textContent = 'Show more';
                div.style.display = 'none';
            }
        }
    }
}
