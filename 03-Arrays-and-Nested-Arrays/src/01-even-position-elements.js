function evenPositionElements(arr) {
    let result ='';
    for (let i = 0; i < arr.length; i+=2) {
            result += arr[i] + ' ';
    }

    console.log(result);
}

evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);
