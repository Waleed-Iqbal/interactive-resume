import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button
        className="game-square"
        onClick={() => this.props.onClick(this.props.number)}
      >
        {this.props.content}
      </button>
    );
  }
}

export default Square;
