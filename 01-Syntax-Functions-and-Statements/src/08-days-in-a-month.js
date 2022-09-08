function solve(month, year){
    console.log(new Date(year, month, 0).getDate());
}

solve(1, 2012);
solve(2, 2021);
