import React, { Component } from "react";
import "./BoxGroup.css";
import { InputBox } from "../../Components/InputBox/InputBox";
import { ResultBox } from "../../Components/ResultBox/ResultBox";

export class BoxGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ["0", "0", "0"]
    };
  }

  handleInputChange = event => {
    const tmpArray = this.state.values;
    tmpArray[event.currentTarget.id] = event.currentTarget.value;
    this.setState({ values: tmpArray });
  };

  render() {
    const { values } = this.state;
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
                handleInputChange={this.handleInputChange}
              />
            );
          })}
          <ResultBox values={values} />
        </div>
      </div>
    );
  }
}
