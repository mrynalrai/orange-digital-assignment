import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "@testing-library/jest-dom";

// Validates if the Landing pageis working
test("Renders Weather Heading", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headerElement = screen.getByText(/Weather/i);
  expect(headerElement).toBeInTheDocument();
});

// Validates if the City name is correctly stored in redux after clicking on search button
test("update City name in redux", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const searchBox = screen.getByRole("searchbox");
  expect(searchBox).toHaveTextContent("");

  searchBox.textContent = "London"; // To simulate entered search value

  const addButton = screen.getByText(/Search/i);
  fireEvent.click(addButton);

  expect(searchBox).toHaveTextContent("London");
});
