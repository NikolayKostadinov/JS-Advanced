function solve() {
    const wrightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    Array.from(document.querySelectorAll('.answer-text'))
        .forEach(btn => btn.addEventListener('click', clickHandler));
    const sections = Array.from(document.querySelectorAll('section'));

    let screenNumber = 0;
    let rightAnswers = 0;

    function clickHandler(ev) {
        if (ev.target.textContent === wrightAnswers[screenNumber]) {
            rightAnswers++;
        }

        sections[screenNumber].style.display = 'none';

        if (screenNumber < 2) {
            sections[screenNumber + 1].style.display = 'block';
            screenNumber++;
            return;
        }

        document.querySelector('#results li h1').textContent =
            rightAnswers === 3 ? 'You are recognized as top JavaScript fan!' :
                `You have ${rightAnswers} right answers`

        document.getElementById('results').style.display = 'block';
    }
}
