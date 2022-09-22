function toggle() {
    const span = document.getElementsByClassName('button')[0];
    if (span.textContent === 'More') {
        span.textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    } else {
        span.textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }
}