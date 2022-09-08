function solve(...input){
    let length = 0;
    for (let i = 0; i < input.length; i++) {
        length += input[i].length;
    }

    console.log(length);
    console.log(Math.floor(length/input.length));
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');
