function encodeAndDecodeMessages() {
    const buttons = Array.from(document.querySelectorAll('button'));
    const textAreas = Array.from(document.querySelectorAll('textarea'))

    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode() {
        const text = textAreas[0].value;
        let encodedText = '';
        for (let i = 0; i < text.length; i++) {
            encodedText += String.fromCharCode(text.charCodeAt(i) + 1);
        }

        textAreas[1].value = encodedText;
        textAreas[0].value = '';
    }

    function decode() {
        const text = textAreas[1].value;
        let decodedText = '';
        for (let i = 0; i < text.length; i++) {
            decodedText += String.fromCharCode(text.charCodeAt(i) - 1);
        }

        textAreas[1].value = decodedText;
    }
}