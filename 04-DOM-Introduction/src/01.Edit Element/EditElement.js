function editElement(element, mathc, replacer) {
    let pattern = new RegExp(mathc,'g');
    element.textContent = element.textContent.replace(pattern, replacer);
}