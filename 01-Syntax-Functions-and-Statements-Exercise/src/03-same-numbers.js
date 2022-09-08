function solve(number) {
    let sum = 0
    let strNum = number.toString();
    let isTheSame = true;
    for (let i = 0; i < strNum.length; i++) {
        isTheSame = isTheSame && (strNum[0] === strNum[i]);
        sum += Number(strNum[i]);
    }

    console.log(isTheSame);
    console.log(sum);
}

solve(2222222);
solve(1234);
