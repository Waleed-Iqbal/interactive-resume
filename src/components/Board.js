import React from "react";
import Square from "./Square";

function Board(props) {
  const renderSquare = number => {
    return <Square  />;
  };

  return (
    <div className="game-board">
      <div className="game-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="game-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="game-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
