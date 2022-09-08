function solve(sentence) {
    let pattern = new RegExp('\\w+', 'g');
    let matches = sentence.match(pattern);
    let words = [];
    if (matches) {
        for (const word of matches) {
            words.push(word.toUpperCase())
        }

        console.log(words.join(', '));
    }
}

solve('Hi, how are you?');
solve('hello');
solve(' ');
