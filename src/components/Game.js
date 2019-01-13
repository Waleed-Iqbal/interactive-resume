import React from "react";
import Board from "./Board";

function Game() {
  return (
    <div className="game">
      <Board />
      <div className="game-info">
        <div>{/*gameStatus*/}</div>
        <div>{/*gameHistory*/}</div>
      </div>
    </div>
  );
}

export default Game;
