function extract(elementId) {
    const element = document.getElementById(elementId);
    if(element){
        const pattern = new RegExp(/\((.*?)\)/gm)
        const text = element.textContent;
        let match = pattern.exec(text);

        const result = []
        while(match != null){
            result.push(match[1]);
            match = pattern.exec(text)
        }

        return result.join('; ');
    }
}