function solve(...args) {
    const argTypes = {}
    args.forEach(arg => {
        const argType = typeof (arg);
        console.log(`${argType}: ${arg}`);
        if (!argTypes.hasOwnProperty(argType)) {
            argTypes[argType] = 0;
        }
        argTypes[argType]++;
    })

   console.log(Object.entries(argTypes)
       .sort((a, b) => b[1] - a[1])
       .map(e =>e.join(' = '))
       .join('\n'));
}

solve('cat', 42, function () { console.log('Hello world!'); });
console.log('--------------------------');
solve({ name: 'bob'}, 3.333, 9.999);