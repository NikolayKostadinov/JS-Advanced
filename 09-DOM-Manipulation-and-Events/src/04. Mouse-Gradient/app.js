function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', getPercentage);
    const result = document.getElementById('result');
    function getPercentage(ev) {
        result.textContent = 
        `${Math.floor((ev.offsetX / ev.target.clientWidth) * 100)}%`
    }
}