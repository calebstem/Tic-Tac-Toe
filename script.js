const gameBoard = {
    board: ['','','','','','','','',''],
    turnCount: 0,
} 

function gameBoardController(arrPos, pawn) {
    function gameBoardAdd(arrPos, pawn) { // logic for placing pawns
        gameBoard.board[arrPos] = pawn; //
        document.getElementById(arrPos).innerHTML = pawn;
        gameBoard.turnCount++;
    }

    let winningPerm = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    function checkWinner(boardState){
        for (let i = 0; i < winningPerm.length; i++){
           let curPerm = winningPerm[i];
           if (boardState[curPerm[0]] == boardState[curPerm[1]] && boardState[curPerm[0]] == boardState[curPerm[2]] && boardState[curPerm[0]] !== ''){
                console.log('Winner')
           }
        }
    }

    if (gameBoard.board[arrPos] == ''){  //checks if cell is empty
        if (gameBoard.turnCount % 2 == 0) { 
            gameBoardAdd(arrPos, 'x')
        } else {
            gameBoardAdd(arrPos, 'o')
        }
    }

    checkWinner(gameBoard.board);
}

function displayController() {
    for (let i = 0; i < 9; i++){ //draws gameboard
        let div = document.createElement('a'); //each cell is clickable button
//        div.innerHTML = i;
        div.setAttribute('class', 'cell');
        div.setAttribute('id', i);
        div.addEventListener("click",  //on click change value of cell
            function() {markCell(i)}); //i = position in gameboard array
        document.getElementById("gameBoardContainer").appendChild(div);
    }

    function markCell(id) {
        gameBoardController(id, 'x');
    }

}

function createPlayer(pawn) {
    return {
        pawn: pawn,
    };
}

displayController();