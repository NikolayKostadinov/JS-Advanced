function sameNumbers(input){
    let inputString = input.toString();
    let areTheSame = true;
    let sum = 0;

    for (let index = 0; index < inputString.length; index++) {
        areTheSame = areTheSame && (inputString[0] === inputString[index]);        
        sum += Number(inputString[index]);
    }

    console.log(areTheSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
