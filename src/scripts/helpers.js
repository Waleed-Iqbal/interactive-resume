function isGameOver(squares) {
  let isGameOver =
    squares.filter((val, i) => {
      return Boolean(val);
    }).length === squares.length;

  if (isGameOver) {
    return "No Winner";
  }

  let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningConditions.length; ++i) {
    let [a, b, c] = winningConditions[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return `Winner ${squares[a]}`;
  }
  return false;
}

export { isGameOver };
