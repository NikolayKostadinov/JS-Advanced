function listOfNames(names) {
    console.log(names
        .sort((a, b) => a.localeCompare(b))
        .map((e,ix)=> `${ix+1}.${e}`)
        .join('\n'));
}

listOfNames(["John", "Bob", "Christina", "Ema"]);