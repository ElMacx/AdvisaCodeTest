import React, { useState } from "react";
import "./BoxGroup.css";
import { InputBox } from "../../Components/InputBox/InputBox";
import { ResultBox } from "../../Components/ResultBox/ResultBox";

export const BoxGroup = () => {
  const [values, setValues] = useState(["0", "0", "0"]);

  function modifyArrayValueFromIndex(array, { targetIndex, targetValue }) {
    return array.map((value, index) =>
      index === parseInt(targetIndex) ? targetValue : value
    );
  }

  function handleInputChange(event) {
    setValues(
      modifyArrayValueFromIndex(values, {
        targetIndex: event.currentTarget.id,
        targetValue: event.currentTarget.value
      })
    );
  }

  return (
    <div className="box-group">
      <h1>Advisa code test</h1>
      <div className="box-container">
        {values.map((v, index) => {
          return (
            <InputBox
              key={index}
              id={index}
              label={`Value ${index + 1} :`}
              value={v}
              handleInputChange={handleInputChange}
            />
          );
        })}
        <ResultBox values={values} />
      </div>
    </div>
  );
};
