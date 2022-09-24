function solve() {
    const uniqueProducts = {};
    let sum = 0;

    document.querySelector('div.shopping-cart')
        .addEventListener('click', btnClick);

    const result = document.querySelector('textarea');

    function btnClick(ev) {
        const target = ev.target;
        if (target.tagName === 'BUTTON' && target.classList.contains('add-product')) {
            handleAddProductClick(target);
        } else if (target.tagName === 'BUTTON' && target.classList.contains('checkout')) {
            handleCheckoutClick(target);
        }
    }

    function handleAddProductClick(target) {
        let parentElement = target.parentElement.parentElement;
        const name = parentElement.querySelector('div.product-title').textContent;
        const price = Number(parentElement.querySelector('div.product-line-price').textContent);
        uniqueProducts[name] = '';
        sum += price;
        result.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
    }

    function handleCheckoutClick() {
        result.value += `You bought ${Object.keys(uniqueProducts).join(', ')} for ${sum.toFixed(2)}.`

        Array.from(document.querySelectorAll('button'))
            .forEach(btn => btn.disabled = true);
    }
}
