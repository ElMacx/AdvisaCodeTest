import React from "react";
import ReactDOM from "react-dom";
import { InputTile } from "./InputTile";
import { CustomInput } from "../CustomInput/CustomInput";

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe('InputTile', () => {
  it("InputTile should be defined", () => {
    expect(InputTile).toBeDefined();
  });
  it("CustomInput should be defined", () => {
    expect(CustomInput).toBeDefined();
  });
})
