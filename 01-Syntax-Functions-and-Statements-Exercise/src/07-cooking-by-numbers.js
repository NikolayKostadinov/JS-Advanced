function cookingByNumbers(...params) {
    let number = Number(params[0]);
    for (let i = 1; i < params.length; i++) {
        switch (params[i]) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= 0.2 * number;
                break;
        }

        console.log(number);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('------------------------------------------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
