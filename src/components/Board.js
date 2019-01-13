import React from "react";
import Square from "./Square";

function Board() {
  return (
    <div className="game-board">
      <div className="game-row">
        <Square description="0" />
        <Square description="1" />
        <Square description="2" />
      </div>
      <div className="game-row">
        <Square description="3" />
        <Square description="4" />
        <Square description="5" />
      </div>
      <div className="game-row">
        <Square description="6" />
        <Square description="7" />
        <Square description="8" />
      </div>
    </div>
  );
}

export default Board;
