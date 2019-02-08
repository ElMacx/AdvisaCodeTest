import React, { Component } from "react";
import "./TileGroup.css";
import { InputTile } from "../../Components/InputTile/InputTile";
import { ResultTile } from "../../Components/ResultTile/ResultTile";

export class TileGroup extends Component {
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
      <div className="tile-group">
        <h1>Advisa code test</h1>
        <div>
          {values.map((v, index) => {
            return (
              <InputTile
                key={index}
                id={index}
                label={`Value ${index + 1} :`}
                value={v}
                handleInputChange={this.handleInputChange}
              />
            );
          })}
          <ResultTile values={values} />
        </div>
      </div>
    );
  }
}
