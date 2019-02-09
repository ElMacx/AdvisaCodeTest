import React from "react";
import ReactDOM from "react-dom";
import { ResultTile } from "./ResultTile";
import { CustomRadio } from "../CustomRadio/CustomRadio";

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe('ResultTile', () => {
  it("ResultTile should be defined", () => {
    expect(ResultTile).toBeDefined();
  });
  it("CustomRadio should be defined", () => {
    expect(CustomRadio).toBeDefined();
  });
})
