import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ListData from "./ListData";
import "@testing-library/jest-dom";
import { WeatherData } from "../redux/weather";

const data: WeatherData = {
  temperature: 18,
  humidity: 0.8,
  windSpeed: 4
};

// Validates if ListData renders correct weather data
test("renders weather data", () => {
  render(<ListData data={data} />);
  const anchorElements = screen.getAllByRole("weatherData");
  expect(anchorElements[0]).toHaveTextContent(data["temperature"].toString());
  expect(anchorElements[1]).toHaveTextContent(data["humidity"].toString());
  expect(anchorElements[2]).toHaveTextContent(data["windSpeed"].toString());
});

// Validates if Toggle button update state of isCelsius correctly on clicking
test("handles isCelsius toggle state", () => {
  render(<ListData data={data} />);

  const divElement = screen.getByRole("toggleButton");
  const buttonElement = screen.getByText("Switch to Farenheit?");
  fireEvent.click(buttonElement);

  expect(divElement).toHaveTextContent("Switch to Celsius?");
});
