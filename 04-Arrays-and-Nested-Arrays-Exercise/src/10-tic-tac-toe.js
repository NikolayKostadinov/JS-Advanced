function game(steps) {
    const board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]];

    let player = 'X';

    for (const step of steps) {
        let [x, y] = step.split(' ').map(Number);
        if (board[x][y]) {
            console.log('This place is already taken. Please choose another!');
        } else {
            board[x][y] = player;
            if (playerWins(board)) {
                console.log(`Player ${player} wins!`);
                printBoard(board);
                return;
            }

            player = player === 'O' ? 'X' : 'O';
        }

        if (boardIsFull(board)) {
            console.log('The game ended! Nobody wins :(');
            printBoard(board);
            return;
        }
    }

    function playerWins(board) {
        //check rows
        for (let i = 0; i < board.length; i++) {
            let row = board[i];
            if (row.every(v => row[0] && v === row[0])) {
                return true;
            }
        }

        //check
        for (let i = 0; i < board.length; i++) {
            let equal = false;
            if (board[0][i] && board[0][i] == board[1][i] && board[0][i] == board[2][i]) {
                return true;
            }
        }

        let leftD = true;
        let rightD = true;
        
        for (let i = 1; i < board.length; i++) {
            leftD = leftD && board[i][i] && board[0][0] === board[i][i];
            rightD = rightD && board[i][2 - i] && board[0][2] === board[i][2 - i] ;
        }


        return leftD || rightD;
    }

    function boardIsFull(board) {
        return board.flatMap(x => x).every(x => x);
    }

    function printBoard(board) {
        console.log(board.reduce((prev, curr) => {
            prev += curr.join('\t') + '\n';
            return prev;
        }, ''));
    }
}

game(
    ["0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 1",
        "1 2",
        "2 2",
        "2 1",
        "0 0"]
);

game(
    ["0 0",
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

game(
    ["0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 2",
        "1 1",
        "2 1",
        "2 2",
        "0 0"]

);