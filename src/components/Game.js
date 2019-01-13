import React from "react";
import Board from "./Board";
import * as Helpers from "../scripts/helpers";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      squares: Array(9).fill(null),
      history: [Array(9).fill(null)],
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
        history: this.state.history.concat([arr]),
        isGameOver: true,
        status: isGameOver
      });
      return;
    }

    this.setState({
      xIsNext: !this.state.xIsNext,
      history: this.state.history.concat([arr]),
      squares: arr,
      status: `Turn: ${!this.state.xIsNext ? "X" : "O"}`
    });
  };

  getHistory = () => {
    let steps = this.state.history.map((step, i) => {
      let desc = i===0 ? "Go to Start" : `Go to step# ${i}`;
      return (
        <li key={i}>
          <button>{desc}</button>
        </li>
      );
    });
    return steps;
  };

  render() {
    let history;

    return (
      <div className="game">
        <Board onClick={this.handleClick} squares={this.state.squares} />
        <div className="game-info">
          <div className="game-status">{this.state.status}</div>
          <ul className="game-history">{this.getHistory()}</ul>
        </div>
      </div>
    );
  }
}

export default Game;
