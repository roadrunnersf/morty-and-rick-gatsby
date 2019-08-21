import React from "react";
import Enzyme, { shallow, adapter } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import HomeBox from "./HomeBox";

describe("HomeBox", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<HomeBox />);
    expect(wrapper).toMatchInlineSnapshot(`ShallowWrapper {}`);
  });
});
