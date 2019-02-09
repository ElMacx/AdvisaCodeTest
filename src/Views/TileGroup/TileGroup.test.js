import React from "react";
import { TileGroup } from "./TileGroup";
import { InputTile } from "../../Components/InputTile/InputTile";
import { ResultTile } from "../../Components/ResultTile/ResultTile";

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe('TileGroup', () => {
  it("TileGroup should be defined", () => {
    expect(TileGroup).toBeDefined();
  });
  it("InputTile should be defined", () => {
    expect(InputTile).toBeDefined();
  });
  it("ResultTile should be defined", () => {
    expect(ResultTile).toBeDefined();
  });
})
