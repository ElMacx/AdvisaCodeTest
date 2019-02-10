import React from "react";
import ReactDOM from "react-dom";
import { ResultBox } from "./ResultBox";
import { RadioButton } from "../RadioButton/RadioButton";

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe('ResultBox', () => {
  it("ResultBox should be defined", () => {
    expect(ResultBox).toBeDefined();
  });
  it("CustomRadio should be defined", () => {
    expect(RadioButton).toBeDefined();
  });
})
