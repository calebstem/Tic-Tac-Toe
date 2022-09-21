const gameBoard = {
    board: ['','','','','','','','',''],
} 

function gameBoardController(arrPos, pawn) {
    function gameBoardAdd(arrPos, pawn) {
        gameBoard.board[arrPos] = pawn;
        console.table(gameBoard.board);
    }
    
    gameBoardAdd(arrPos, pawn);
    
    return gameBoard.board;
}

function displayController() {
//    gameBoard = gameBoard();
    for (let i = 0; i < 9; i++){ //draws gameboard
        let div = document.createElement('a');
//        div.innerHTML = gameBoard[i];
        div.innerHTML = i;
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