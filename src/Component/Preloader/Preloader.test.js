import React from "react";
import { shallow } from "enzyme";
import Preloader from "./Preloader";

describe("Preloader", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Preloader />);
    expect(wrapper).toMatchSnapshot();
  });
});
