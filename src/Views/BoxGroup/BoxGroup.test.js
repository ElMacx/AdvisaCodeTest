import React from "react";
import { BoxGroup } from "./BoxGroup";
import { InputBox } from "../../Components/InputBox/InputBox";
import { ResultBox } from "../../Components/ResultBox/ResultBox";

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe('BoxGroup', () => {
  it("BoxGroup should be defined", () => {
    expect(BoxGroup).toBeDefined();
  });
  it("InputBox should be defined", () => {
    expect(InputBox).toBeDefined();
  });
  it("ResultBox should be defined", () => {
    expect(ResultBox).toBeDefined();
  });
})
