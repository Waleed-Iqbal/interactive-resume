
import Square from


function Board() {
  return (
    <div class="game-board">
      <div class="game-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div class="game-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div class="game-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default Board;
