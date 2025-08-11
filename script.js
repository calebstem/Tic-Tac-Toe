const gameBoard = {
    board: ['','','','','','','','',''],
    turnCount: 0,
    gameOver: false
} 

function gameBoardController(arrPos, pawn) {
    if (gameBoard.gameOver || gameBoard.board[arrPos] !== '') {
        return; // Don't allow moves if game is over or cell is occupied
    }

    function gameBoardAdd(arrPos, pawn) {
        gameBoard.board[arrPos] = pawn;
        const cell = document.getElementById(arrPos);
        cell.innerHTML = pawn;
        cell.classList.add(pawn);
        gameBoard.turnCount++;
        updateGameInfo();
    }

    let winningPerm = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    function checkWinner(boardState){
        for (let i = 0; i < winningPerm.length; i++){
           let curPerm = winningPerm[i];
           if (boardState[curPerm[0]] == boardState[curPerm[1]] && 
               boardState[curPerm[0]] == boardState[curPerm[2]] && 
               boardState[curPerm[0]] !== ''){
                gameBoard.gameOver = true;
                document.getElementById('gameInfo').innerHTML = `Player ${boardState[curPerm[0]].toUpperCase()} wins!`;
                return true;
           }
        }
        
        // Check for draw
        if (gameBoard.turnCount === 9) {
            gameBoard.gameOver = true;
            document.getElementById('gameInfo').innerHTML = "It's a draw!";
            return true;
        }
        
        return false;
    }

    // Fixed turn logic: X goes first (even turnCount), O goes second (odd turnCount)
    if (gameBoard.turnCount % 2 == 0) { 
        gameBoardAdd(arrPos, 'x')
    } else {
        gameBoardAdd(arrPos, 'o')
    }

    checkWinner(gameBoard.board);
}

function displayController() {
    // Add game info display
    const gameInfo = document.createElement('div');
    gameInfo.id = 'gameInfo';
    gameInfo.innerHTML = "Player X's turn";
    document.body.insertBefore(gameInfo, document.getElementById('gameBoardContainer'));
    
    // Add reset button
    const resetButton = document.createElement('button');
    resetButton.id = 'resetButton';
    resetButton.innerHTML = 'Reset Game';
    resetButton.addEventListener('click', resetGame);
    document.body.insertBefore(resetButton, document.getElementById('gameBoardContainer'));
    
    for (let i = 0; i < 9; i++){
        let div = document.createElement('div'); // Changed from 'a' to 'div' for better semantics
        div.setAttribute('class', 'cell');
        div.setAttribute('id', i);
        div.addEventListener("click", function() {
            markCell(i);
        });
        document.getElementById("gameBoardContainer").appendChild(div);
    }

    function markCell(id) {
        gameBoardController(id);
    }
}

function updateGameInfo() {
    if (!gameBoard.gameOver) {
        const currentPlayer = gameBoard.turnCount % 2 === 0 ? 'X' : 'O';
        document.getElementById('gameInfo').innerHTML = `Player ${currentPlayer}'s turn`;
    }
}

function resetGame() {
    gameBoard.board = ['','','','','','','','',''];
    gameBoard.turnCount = 0;
    gameBoard.gameOver = false;
    
    // Clear all cells
    for (let i = 0; i < 9; i++) {
        const cell = document.getElementById(i);
        cell.innerHTML = '';
        cell.classList.remove('x', 'o');
    }
    
    // Reset game info
    document.getElementById('gameInfo').innerHTML = "Player X's turn";
}

function createPlayer(pawn) {
    return {
        pawn: pawn,
    };
}

displayController();