import React from 'react';
import "./InputBox.css";
import { CustomInput } from "../CustomInput/CustomInput";

export const InputBox = (props) => {
  return (
    <div className="input-box">
      <CustomInput label={props.label} id={props.id} value={props.value} handleInputChange={props.handleInputChange}/>
    </div>
  )
}
