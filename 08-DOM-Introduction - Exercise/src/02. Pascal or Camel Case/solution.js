function solve() {
    const toConvention = (text, predicate) => text
        .toLowerCase()
        .split(/\s+/gm)
        .map(predicate)
        .join('');

    const cases = {
        'Pascal Case': (text) => toConvention(text,(w) => w.charAt(0).toUpperCase() + w.substring(1)),
        'Camel Case': (text) => toConvention(text,(w, ix) => ix === 0 ? w : w.charAt(0).toUpperCase() + w.substring(1))     ,
        default: 'Error!'
    }

    const text = document.getElementById('text').value;
    const namingConvention = document.getElementById('naming-convention').value;

    document.getElementById('result').textContent =
        cases.hasOwnProperty(namingConvention) ? cases[namingConvention](text) : cases.default;
}



