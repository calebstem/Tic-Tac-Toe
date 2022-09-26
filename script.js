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

    function checkWinner(){
        switch(gameBoard.board) {
            case gameBoard.board[0] == gameBoard.board[1] == gameBoard.board[2]:
                console.log('Winner');
                break;

        }
    }

    if (gameBoard.board[arrPos] == ''){  //checks if cell is empty
        if (gameBoard.turnCount % 2 == 0) {
            gameBoardAdd(arrPos, 'x')
        } else {
            gameBoardAdd(arrPos, 'o')
        }
    }

    if (gameBoard.turnCount > 1 && gameBoard.board[0] == gameBoard.board[1] == gameBoard.board[2]){
        console.log('winner')
    }
    
    return gameBoard.board;
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