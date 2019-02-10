import React, { useState } from "react";
import "./ResultBox.css";
import { RadioButton } from "../RadioButton/RadioButton";
import { ADDITION, MULTIPLY } from "../../Tools/MathTools";

export const ResultBox = props => {
  const [operator, setOperator] = useState("+");

  function getFinalResult() {
    const retValue =
      operator === "+" ? ADDITION(props.values) : MULTIPLY(props.values);
    return retValue % 1 ? retValue.toFixed(2) : retValue || 0;
  }

  function handleOperatorChange(event) {
    setOperator(event.currentTarget.id);
  }

  return (
    <div className="result-box">
      <RadioButton
        label="Sum"
        handleOperatorChange={handleOperatorChange}
        id="+"
        operator={operator}
      />
      <RadioButton
        label="Multitply"
        handleOperatorChange={handleOperatorChange}
        id="*"
        operator={operator}
      />
      <span>Result: {getFinalResult()}</span>
    </div>
  );
};
