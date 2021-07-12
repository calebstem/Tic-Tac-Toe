const gameBoard = (() => {
  let _board = new Array(9);
  function initalizeBoard() {
    const toAdd = document.createDocumentFragment();
    for (let i = 0;i < _board.length;i++){
      const newDiv = document.createElement('div');
      let divContent = document.createTextNode(`${i}`);
      newDiv.id = i;
      newDiv.className = 'gameBoard';
      newDiv.addEventListener('click', function() {
        gamePlay.markSquare(i);
      });
      newDiv.appendChild(divContent);
      toAdd.appendChild(newDiv);
    }
    document.getElementById('gameboardContainer').appendChild(toAdd);
  }

  return initalizeBoard();
})();

const Player = () => {
  
};

const gamePlay = (() => {
  const markSquare = i => {
    console.log(i)
  };

  return {markSquare};
})();