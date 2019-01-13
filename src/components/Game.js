import React from "react";
import Board from "./Board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
}

export default Game;
