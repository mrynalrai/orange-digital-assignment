import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonWrapper } from "./ButtonWrapper";
import "@testing-library/jest-dom";

// Validates if the action is triggered correctly when a user clicks on the button
test("handles onClick for ButtonWrapper", () => {
  const onClick = jest.fn();
  render(<ButtonWrapper onClick={onClick} title="Search" />);
  const buttonElement = screen.getByText("Search");
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
