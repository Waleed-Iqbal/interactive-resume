import React from "react";
import Board from "./Board";
import * as Helpers from "../scripts/helpers";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      squares: Array(9).fill(null)
    };
  }

  handleClick = i => {
    let arr = this.state.squares.slice();
    arr[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      xIsNext: !this.state.xIsNext,
      squares: arr
    });
  };

  render() {
    let status = `Turn: ${this.state.xIsNext ? "X" : "O"}`;
    Helpers.isGameOver(this.state.squares);

    return (
      <div className="game">
        <Board onClick={this.handleClick} squares={this.state.squares} />
        <div className="game-info">
          <div className="game-status">{status}</div>
          <div>{/*gameHistory*/}</div>
        </div>
      </div>
    );
  }
}

export default Game;
