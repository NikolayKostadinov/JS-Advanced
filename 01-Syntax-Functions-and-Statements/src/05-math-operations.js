function solve(...tokens){
    let result = 0;
    switch (tokens[2]){
        case '+':
            result = tokens[0] + tokens[1];
            break;
        case '-':
            result = tokens[0] - tokens[1];
            break;
        case '*':
            result = tokens[0] * tokens[1];
            break;
        case '/' :
            result = tokens[0] / tokens[1];
            break;
        case '%' :
            result = tokens[0] % tokens[1];
            break;
        case '**':
            result = tokens[0] ** tokens[1];
            break;
    }

    console.log(result);
}

solve(5, 6, '+');
solve(3, 5.5, '*');
