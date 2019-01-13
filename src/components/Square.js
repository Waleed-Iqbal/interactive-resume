import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ""
    };
  }
  onClick = () => {
    this.setState({
      description: "X"
    });
  };
  render() {
    return (
      <button className="game-square" onClick={this.onClick}>
        {this.state.description}
      </button>
    );
  }
}

export default Square;
