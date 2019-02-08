import React from 'react';
import "./InputTile.css";

export const InputTile = (props) => {
  return (
    <div className="input-tile">
      <label>
        {props.label}
        <input id={props.id} className="input-tile-input" value={props.value} onChange={props.handleInputChange}/>
      </label>
    </div>
  )
}
