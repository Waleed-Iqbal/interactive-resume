import React from "react";
import Board from "./Board";
import * as helpers from "../scripts/helpers";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      xIsNext: true,
      stepNumber: 0
    };
  }

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (helpers.calculateWinner(squares) || squares[i]) {
      return;
    }
    this.setState({
        history: history.concat([
            {
                squares: squares
            }
        ]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length
    });
    squares[i] = this.state.xIsNext ? "X" : "O";
  };

  jumpTo = step => {
      this.setState({
          stepNumber: step,
          xIsNext: (step%2) === 0
      })
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = helpers.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : `Go to game start`;
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status =
      winner !== null
        ? `Winner: ${winner}`
        : `Next player: ${this.state.xIsNext ? "X" : "O"}`;

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>{moves}</div>
        </div>
      </div>
    );
  }
}

export default Game;
