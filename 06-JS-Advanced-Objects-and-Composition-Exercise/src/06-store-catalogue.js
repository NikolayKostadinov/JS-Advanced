function storeCatalogue(products) {
    const productCatalogue = products.reduce( (p,c) => {
        const [product, price] = c.split(" : ");
        p.push({product, price:Number(price)});
        return p;
    }, []).sort((a,b) => a.product.localeCompare(b.product));

    let letter = '';
    let result = '';
    productCatalogue.forEach(element => {
        if(element.product[0].toUpperCase().localeCompare(letter) !== 0){
            letter = element.product[0].toUpperCase();
            result += letter + '\n';
        }

        result += `  ${element.product}: ${element.price}\n`
    });

    console.log(result);
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
    
    storeCatalogue(
        ['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
    );