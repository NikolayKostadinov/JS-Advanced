window.addEventListener('load', solution);

function solution() {
    const inputs = getInputs();
    const submitBTN = document.getElementById('submitBTN');
    submitBTN.addEventListener('click', onSubmitClick);

    function onSubmitClick(ev) {
        ev.preventDefault()
        if (!isValid()) return;
        const data = getData();
        const infoPreview = document.getElementById('infoPreview');
        infoPreview.appendChild(createElement('li', `Full Name: ${data.fname}`));
        infoPreview.appendChild(createElement('li', `Email: ${data.email}`));
        infoPreview.appendChild(createElement('li', `Phone Number: ${data.phone}`));
        infoPreview.appendChild(createElement('li', `Address: ${data.address}`));
        infoPreview.appendChild(createElement('li', `Postal Code: ${data.code}`));

        clearInput();

        submitBTN.disabled = true;
        const editBtn = document.getElementById('editBTN');
        const continueBtn = document.getElementById('continueBTN');
        editBtn.disabled = false;
        continueBtn.disabled = false;

        editBtn.addEventListener('click', () => {
            setInputsData(data);
            removeChildren(infoPreview);
            submitBTN.disabled = false;
            editBtn.disabled = true;
            continueBtn.disabled = true;
        });

        continueBtn.addEventListener('click', ()=>{
            document.getElementById('block').remove();
            const block = createElement('div');
            block.id = 'block';
            block.appendChild(createElement('h3', 'Thank you for your reservation!'));
            document.querySelector('body').appendChild(block);
        })
    }

    function removeChildren(element) {
        Array.from(element.children).forEach(li => li.remove());
    }

    function setInputsData(data) {
        Object.entries(inputs)
            .forEach(([name, input]) => input.value = data[name]);
    }

    function getInputs() {
        return Object.fromEntries(
            Array.from(document.querySelectorAll('input, textarea, select'))
                .filter(i => i.type !== 'button')
                .map(i => [i.id, i]));
    }

    function createElement(type, text, cssClass) {
        const element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }

        if (cssClass) {
            element.className = cssClass;
        }
        return element;
    }

    function getData() {
        return Object.fromEntries(
            Object.entries(inputs)
                .map(([name, input]) => [name, input.value])
        );
    }

    function isValid() {
        return inputs.fname.value !== '' && inputs.email.value !== '';
    }

    function clearInput() {
        Object.values(inputs).forEach(i => i.value = '');
    }
}
