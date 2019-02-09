import React from "react";
import ReactDOM from "react-dom";
import { InputBox } from "./InputBox";
import { CustomInput } from "../CustomInput/CustomInput";

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe('InputBox', () => {
  it("InputBox should be defined", () => {
    expect(InputBox).toBeDefined();
  });
  it("CustomInput should be defined", () => {
    expect(CustomInput).toBeDefined();
  });
})
