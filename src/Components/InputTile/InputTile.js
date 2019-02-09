import React from 'react';
import "./InputTile.css";
import { CustomInput } from "../CustomInput/CustomInput";

export const InputTile = (props) => {
  return (
    <div className="input-tile">
      <CustomInput label={props.label} id={props.id} value={props.value} handleInputChange={props.handleInputChange}/>
    </div>
  )
}
