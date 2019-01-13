import React from "react";
import Square from "./Square";

function Board(props) {
  let renderSquare = number => {
    return (
      <Square
        number={number}
        onClick={props.onClick}
        content={props.squares[number] ? props.squares[number] : ""}
      />
    );
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
