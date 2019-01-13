import Board from "./Board";

function Game() {
  return (
    <div class="game">
      <Board />
      <div class="game-info">
        <div>{/*gameStatus*/}</div>
        <div>{/*gameHistory*/}</div>
      </div>
    </div>
  );
}

export default Game;
