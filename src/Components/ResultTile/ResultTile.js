import React from "react";
import "./ResultTile.css";

export class ResultTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: "+"
    };
  }

  getFinalResult = () => {
    if (this.state.operator === "+") {
      return this.props.values.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    } else {
      return this.props.values.reduce((a, b) => parseInt(a) * parseInt(b));
    }
  };

  handleOperatorChange = event => {
    this.setState({ operator: event.currentTarget.id })
  };

  render() {
    return (
      <div className="result-tile">
        <label className="result-tile-label">
          <input
            className="result-tile-input"
            id="+"
            type="radio"
            checked={this.state.operator === "+"}
            onChange={this.handleOperatorChange}
          />
          Sum
        </label>
        <label className="result-tile-label">
          <input
            className="result-tile-input"
            id="*"
            type="radio"
            checked={this.state.operator === "*"}
            onChange={this.handleOperatorChange}
          />
          Multiply
        </label>
        <span>Result: {this.getFinalResult()}</span>
      </div>
    );
  }
}
