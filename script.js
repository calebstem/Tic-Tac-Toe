const gameBoard = (() => {
  let _board = new Array(9);
  function initalizeBoard() {
    const toAdd = document.createDocumentFragment();
    for (let i = 0;i < _board.length;i++){
      const newDiv = document.createElement('div');
      let divContent = document.createTextNode(`${i}`);
      newDiv.id = i;
      newDiv.className = 'gameBoard';
      newDiv.appendChild(divContent);
      toAdd.appendChild(newDiv);
    }
    document.getElementById('gameboardContainer').appendChild(toAdd);
  }

  return initalizeBoard();
})();

const Player = (sign) => {
  let _sign = sign;
  const getSign = () => _sign;
  const setSign = (sign, active) => {
    _sign = sign;
  }
};