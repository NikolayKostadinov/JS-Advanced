function daysInMonth(month, year){
    console.log(new Date(year, month, 0).getDate());
}

daysInMonth(1, 2012);
daysInMonth(2, 2021);
