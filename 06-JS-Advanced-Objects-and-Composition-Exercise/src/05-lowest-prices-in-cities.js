function solve(input){
    const towns = input
    .map(e=>{
        const[town, product, price] = e.split(' | ');
        return {town,product, price: Number(price)};
    })
    .reduce((p,c)=>{
        if(!p.hasOwnProperty(c.product)){
            p[c.product] = c;
        } else {
            if(c.price < p[c.product].price){
                p[c.product] = c;
            }
        }
        return p;
    }, {})

    console.log(Object.values(towns).map(v=>`${v.product} -> ${v.price} (${v.town})`).join('\n'));
}
solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);
