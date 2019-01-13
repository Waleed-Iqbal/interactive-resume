import React from "react";
import Board from "./Board";
import * as Helpers from "../scripts/helpers";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.startingState = {
      xIsNext: true,
      status: "Turn X",
      isGameOver: false,
      squares: Array(9).fill(null),
      history: [Array(9).fill(null)]
    };
    this.state = this.startingState;
  }

  handleClick = i => {
    if (this.state.isGameOver) return; // no further input when game is over

    let arr = this.state.squares.slice();
    arr[i] = this.state.xIsNext ? "X" : "O";

    let isGameOver = Helpers.isGameOver(arr);
    if (isGameOver) {
      this.setState({
        squares: arr,
        history: [Array(9).fill(null)],
        isGameOver: true,
        status: isGameOver
      });
      return;
    }

    let updatedHistory = arr.reduce((result, val, i) => {
      return val !== null ? ++result : result;
    }, 0);

    this.setState({
      xIsNext: !this.state.xIsNext,
      history: this.state.history.slice(0, updatedHistory).concat([arr]),
      squares: arr,
      status: `Turn: ${!this.state.xIsNext ? "X" : "O"}`
    });
  };

  goToStep = stepNumber => {
    if (stepNumber === 0) {
      this.setState(this.startingState);
    } else {
      this.setState({
        squares: this.state.history[stepNumber]
      });
    }
  };

  getHistory = () => {
    let steps = this.state.history.map((step, i) => {
      let desc = i === 0 ? "New Game" : `Go to step# ${i}`;
      return (
        <li key={i}>
          <button onClick={() => this.goToStep(i)}>{desc}</button>
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
