import React from "react";
import Board from "./Board";
import * as Helpers from "../scripts/helpers";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      squares: Array(9).fill(null),
      isGameOver: false,
      status: "Turn X"
    };
  }

  handleClick = i => {
    if (this.state.isGameOver) return; // no further input when game is over

    let arr = this.state.squares.slice();
    arr[i] = this.state.xIsNext ? "X" : "O";

    let isGameOver = Helpers.isGameOver(arr);
    if (isGameOver) {
      this.setState({
        squares: arr,
        isGameOver: true,
        status: isGameOver
      });
      return;
    }

    this.setState({
      xIsNext: !this.state.xIsNext,
      squares: arr,
      status: `Turn: ${!this.state.xIsNext ? "X" : "O"}`
    });
  };

  render() {
    return (
      <div className="game">
        <Board onClick={this.handleClick} squares={this.state.squares} />
        <div className="game-info">
          <div className="game-status">{this.state.status}</div>
          <div>{/*gameHistory*/}</div>
        </div>
      </div>
    );
  }
}

export default Game;
