import React from "react";
import { CustomInput } from "./CustomInput";

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe('CustomInput', () => {
  it("CustomInput should be defined", () => {
    expect(CustomInput).toBeDefined();
  });
  it("Input change should call the change method", () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(
      <CustomInput
      label="Toto"
          handleInputChange={mockCallBack}
      />
    );
    wrapper
      .find('input')
      .simulate('change');
    expect(mockCallBack).toHaveBeenCalled();
  });
  it("Correct text should be displayed", () => {
    const wrapper = shallow(
      <CustomInput
        label="Next"/>
    );
    expect(wrapper.text()).toContain('Next');
  });
})
