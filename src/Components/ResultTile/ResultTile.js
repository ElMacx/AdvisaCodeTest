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
    const retValue =
      this.state.operator === "+"
        ? this.props.values.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
        : this.props.values.reduce((a, b) => parseFloat(a) * parseFloat(b));
    return retValue % 1 ? retValue.toFixed(2) : retValue;
  };

  handleOperatorChange = event => {
    this.setState({ operator: event.currentTarget.id });
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
