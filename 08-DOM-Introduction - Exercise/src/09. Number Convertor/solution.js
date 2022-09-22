function solve() {
    const selectMenuTo = document.getElementById('selectMenuTo');
    document.querySelector('button').addEventListener('click', convertNumbers, false);

    initForm();

    const convert = {
        binary: x => x.toString(2),
        hexadecimal: x => x.toString(16).toUpperCase()
    }

    function convertNumbers() {
        const number = Number(document.getElementById('input').value);
        document.getElementById('result').value = convert[selectMenuTo.value](number);
    }

    function initForm() {
        const binaryOption  = document.createElement('option');
        binaryOption.value = 'binary';
        binaryOption.text = 'Binary';

        selectMenuTo.appendChild(binaryOption);

        const hexadecimalOption = document.createElement('option');
        hexadecimalOption.value = 'hexadecimal';
        hexadecimalOption.text = 'Hexadecimal';

        selectMenuTo.appendChild(hexadecimalOption);
    }
}
