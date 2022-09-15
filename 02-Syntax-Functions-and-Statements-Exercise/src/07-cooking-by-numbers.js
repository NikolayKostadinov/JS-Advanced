function cookingByNumbers(number, ...commands) {
    const operations = initOperations();
    let num = Number(number);
    commands.forEach(command => {
        num = operations[command](num);
        console.log(num);        
    });


    function initOperations() {
        const operations = {};
        operations.chop = n => n / 2;
        operations.dice = n => Math.sqrt(n);
        operations.spice = n => n + 1;
        operations.bake = n => n * 3;
        operations.fillet = n => n - (n * 0.2);
        return operations;
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('-------------------------------------')-
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');


