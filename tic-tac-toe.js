
const boardElement = document.getElementById('board');
const squares = document.querySelectorAll('.square');

startGame();

function startGame() {

  squares.forEach((square) => {
    square.classList.remove('X');
    square.classList.remove('O');
    square.classList.add('empty');
  });


  const statusDiv = document.getElementById('status');
  statusDiv.innerHTML = 'Move your mouse over a square and click to play an X or an O.';
  statusDiv.classList.remove('you-won');

 
  squares.forEach((square) => {
    square.addEventListener('click', () => {
      const currentPlayer = square.classList.contains('X') ? 'O' : 'X';
      square.classList.add(currentPlayer);
      const winner = checkForWinner();

      if (winner) {
        statusDiv.innerHTML = `Congratulations! ${winner} is the winner!`;
        statusDiv.classList.add('you-won');
      }
      
      square.disabled = true;
    });
  });
}

function checkForWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const winningCombination of winningCombinations) {
    const square1 = document.getElementById(`square-${winningCombination[0]}`);
    const square2 = document.getElementById(`square-${winningCombination[1]}`);
    const square3 = document.getElementById(`square-${winningCombination[2]}`);

    if (square1.classList.contains(square2.classList[0]) && square1.classList.contains(square3.classList[0]) && square1.classList[0] !== 'empty') {
      return square1.classList[0];
    }
  }

  return null;
}
