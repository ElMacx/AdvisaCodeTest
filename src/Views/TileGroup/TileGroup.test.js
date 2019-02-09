import React from "react";
import { TileGroup } from "./TileGroup";

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe('TileGroup', () => {
  it("TileGroup should be defined", () => {
    expect(TileGroup).toBeDefined();
  });
})
