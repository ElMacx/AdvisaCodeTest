import React from "react";
import "./ResultBox.css";
import { RadioButton } from "../RadioButton/RadioButton";
import { ADDITION, MULTIPLY } from "../../Tools/MathTools";

export class ResultBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: "+"
    };
  }

  getFinalResult = () => {
    const retValue =
      this.state.operator === "+"
        ? ADDITION(this.props.values)
        : MULTIPLY(this.props.values);
    return retValue % 1 ? retValue.toFixed(2) : retValue || 0;
  };

  handleOperatorChange = event => {
    this.setState({ operator: event.currentTarget.id });
  };

  render() {
    return (
      <div className="result-box">
        <RadioButton
          label="Sum"
          handleOperatorChange={this.handleOperatorChange}
          id="+"
          operator={this.state.operator}
        />
        <RadioButton
          label="Multitply"
          handleOperatorChange={this.handleOperatorChange}
          id="*"
          operator={this.state.operator}
        />
        <span>Result: {this.getFinalResult()}</span>
      </div>
    );
  }
}
