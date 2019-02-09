import React from "react";
import "./ResultTile.css";
import { CustomRadio } from "../CustomRadio/CustomRadio";
import { ADDITION, MULTIPLY } from "../../Tools/MathTools";

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
        ? ADDITION(this.props.values)
        : MULTIPLY(this.props.values);
    return retValue % 1 ? retValue.toFixed(2) : retValue || 0;
  };

  handleOperatorChange = event => {
    this.setState({ operator: event.currentTarget.id });
  };

  render() {
    return (
      <div className="result-tile">
        <CustomRadio
          label="Sum"
          handleOperatorChange={this.handleOperatorChange}
          id="+"
          operator={this.state.operator}
        />
        <CustomRadio
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
