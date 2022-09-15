function wordsUppercase(inStr) {
    console.log(((inStr.match(/\w+/g))||[]).join(', ').toUpperCase());
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
wordsUppercase(' ');