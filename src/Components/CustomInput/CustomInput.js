import React from 'react';
import "./CustomInput.css";

export const CustomInput = (props) => {
  return (
      <label>
        {props.label}
        <input id={props.id} className="custom-input" value={props.value} onChange={props.handleInputChange}/>
      </label>
  )
}
