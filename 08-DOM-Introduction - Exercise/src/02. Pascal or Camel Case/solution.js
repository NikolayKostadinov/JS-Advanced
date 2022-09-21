function solve() {
    const pascalCase = (text) => text
        .toLowerCase()
        .split(/\s+/gm)
        .map(w => w.charAt(0).toUpperCase() + w.substring(1))
        .join('');
    const cases = {
        'Pascal Case': (text) => pascalCase(text),
        'Camel Case': (text) => {
            let result = pascalCase(text)
            return result.charAt(0).toLowerCase() + result.substring(1);
        },
        default: 'Error!'
    }

    const text = document.getElementById('text').value;
    const namingConvention = document.getElementById('naming-convention').value;

    document.getElementById('result').textContent =
        cases.hasOwnProperty(namingConvention) ? cases[namingConvention](text) : cases.default;
}



