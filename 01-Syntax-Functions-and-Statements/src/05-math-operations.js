function mathOperations(...tokens){
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

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
