import React from "react";
import ReactDOM from "react-dom";
import { ADDITION, MULTIPLY } from "./MathTools";

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe('MathTools', () => {
  it("ADDITION should work", () => {
    const array = ["5", "10", "12"];
    expect(ADDITION(array)).toBe(27);
  });
  it("MULTIPLY should work", () => {
    const array = ["5", "10", "12"];
    expect(MULTIPLY(array)).toBe(600);
  });
})
