import React from 'react';
import "./CustomRadio.css";

export const CustomRadio = (props) => {
  return (
    <label className="custom-radio-label">
      <input
        className="custom-radio-input"
        id={props.id}
        type="radio"
        checked={props.operator === props.id}
        onChange={props.handleOperatorChange}
      />
    {props.label}
    </label>
  )
}
