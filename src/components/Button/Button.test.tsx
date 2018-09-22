import * as React from "react";
import { create } from "react-test-renderer";

import Button from "./Button";

describe("Button", () => {
  it("should render correctly", () => {
    const component = create(
      <Button onClick={jest.fn} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
