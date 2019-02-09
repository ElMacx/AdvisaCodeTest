import React from "react";
import ReactDOM from "react-dom";
import { CustomRadio } from "./CustomRadio";

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe('CustomRadio', () => {
  it("Radio button should be defined", () => {
    expect(CustomRadio).toBeDefined();
  });
  it("Radio button click should call the click method", () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(
      <CustomRadio
          operator="+"
          id="+"
          handleOperatorChange={mockCallBack}
      />
    );
    wrapper
      .find('input')
      .simulate('change');
    expect(mockCallBack).toHaveBeenCalled();
  });
  it("Radio button click should change the state to selected", () => {
    let value = false
    const mockCallBack = () => {
      value = true;
    };
    const wrapper = shallow(
      <CustomRadio
          handleOperatorChange={mockCallBack}
          isSelected={value}
      />
    );
    wrapper
      .find('input')
      .simulate('change');
    expect(value).toBe(true);
  });
})
