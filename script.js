function gameBoard(arrPos, pawn) {
    let gameBoard = {
        board: ['','','','','','','','','']
    }

    gameBoard.board.splice(arrPos, 1, pawn);
    
    console.table(gameBoard.board);
}

function displayController() {
//    gameBoard = gameBoard();
    for (let i = 0; i < 9; i++){ //draws gameboard
        let div = document.createElement('a');
//        div.innerHTML = gameBoard[i];
        div.innerHTML = i;
        div.setAttribute('class', 'cell');
        div.setAttribute('id', i);
        div.addEventListener("click",
            function() {markCell(i)});
        document.getElementById("gameBoardContainer").appendChild(div);
    }

    function markCell(id) {
//        document.getElementById(id).innerHTML = id;
        gameBoard(id, 'X');
    }

}

function createPlayer(pawn) {
    return {
        pawn: pawn,
    };
}