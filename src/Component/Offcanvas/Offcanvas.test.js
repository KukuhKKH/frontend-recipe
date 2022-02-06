import React from "react";
import { shallow } from "enzyme";
import Offcanvas from "./Offcanvas";

describe("Offcanvas", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Offcanvas />);
    expect(wrapper).toMatchSnapshot();
  });
});
