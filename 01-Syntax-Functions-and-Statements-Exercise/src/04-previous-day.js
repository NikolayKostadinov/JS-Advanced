function solve(year, month, day) {
    let today = new Date(year, month - 1, day);
    let yesterday = new Date(today.getTime());
    yesterday.setDate(today.getDate() - 1);
    console.log(`${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`);
}

solve(2016, 9, 30);
solve(2016, 10, 1);
