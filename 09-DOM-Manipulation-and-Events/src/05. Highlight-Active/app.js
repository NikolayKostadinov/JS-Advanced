function focused() {
    const inputs = Array.from(document.querySelectorAll('div input'));
    inputs.forEach(input => {
        input.addEventListener("focus", onFocus, false);
        input.addEventListener("blur", onBlur, false);
    });

    function onFocus(ev) {
        ev.target.parentElement.classList.add('focused');
    }

    function onBlur(ev) {
        ev.target.parentElement.classList.remove('focused');
    }
}