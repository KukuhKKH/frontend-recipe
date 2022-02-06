import React from "react";
import { shallow } from "enzyme";
import Connection from "./Connection";

describe("Connection", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Connection />);
    expect(wrapper).toMatchSnapshot();
  });
});
