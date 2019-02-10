import React from "react";
import "./RadioButton.css";

export const RadioButton = props => {
  return (
    <label className="custom-radio-label">
      <input
        className="custom-radio-input"
        id={props.id}
        type="radio"
        checked={props.operator === props.id}
        onChange={props.handleOperatorChange}
      />
      <span onClick={props.handleOperatorChange}>{props.label}</span>
    </label>
  );
};
