function stringLenght(...input){
    let length = 0;
    for (let i = 0; i < input.length; i++) {
        length += input[i].length;
    }

    console.log(length);
    console.log(Math.floor(length/input.length));
}

stringLenght('chocolate', 'ice cream', 'cake');
stringLenght('pasta', '5', '22.3');
