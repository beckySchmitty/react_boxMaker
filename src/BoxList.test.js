import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new box", function () {
    const boxList = render(<BoxList />);
    // no boxes yet
    expect(boxList.queryByText("X")).not.toBeInTheDocument();
    // add box 
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const backgroundInput = boxList.getByLabelText("Color");
    fireEvent.change(backgroundInput, { target: { value: "blue" } });
    fireEvent.change(widthInput, { target: { value: '500' } });
    fireEvent.change(heightInput, { target: { value: '500' } });
    const button = boxList.getByText("Add Box!");
    fireEvent.click(button);

    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
    width: 500em;
    height: 500em;
    background-color: blue;
  `);

})
