function solve(movements) {

    let desk = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let movement = 0;
    for (let i = 0; i < movements.length; i++) {
        let position = movements[i].split(" ").map(s => Number(s));
        let symbol = movement % 2 ? "O" : "X";
        if(! desk[position[0]][position[1]]){
            desk[position[0]][position[1]] = symbol;
            movement++;
        } else {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        if (checkDesk(desk)) {
            console.log(`Player ${symbol} wins!`);
            printDesk(desk);
            return;
        }

        if(desk.reduce((prev,curr)=>prev = prev && curr.reduce((p,c)=> p = p && c))) break;
    }

    console.log('The game ended! Nobody wins :(');
    printDesk(desk);
    return;

    function printDesk(desk) {
        desk.forEach(row => console.log(row.join('\t')));
    }



    function checkDesk(desk) {

        //check rows
        for (let i = 0; i < desk.length; i++) {
            let row = desk[i];
            if (row.every(v => row[0] && v === row[0])) {
                return true;
            }   
        }

        //check
        for (let i = 0; i < desk.length; i++) {
            let equal = false;
            if(desk[0][i] && desk[0][i] == desk[1][i] && desk[0][i] == desk[2][i]) {
                return true;
            }
        }

        //diagonal \
        if (desk[0][0] && desk[0][0] == desk[1][1] && desk[0][0] == desk[2][2]) {
            return true;
        }

        //diagonal /
        if (desk[0][2] && desk[0][2] == desk[1][1] && desk[0][2] == desk[2][0]) {
            return true;
        }

        return false;
    }
}

// solve(["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"]
// );

solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
);

// solve(["0 1",
// "0 0",
// "0 2",
// "2 0",
// "1 0",
// "1 2",
// "1 1",
// "2 1",
// "2 2",
// "0 0"]
// );

