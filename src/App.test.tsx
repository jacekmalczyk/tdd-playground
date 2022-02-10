import React from "react";
import { render, screen } from "@testing-library/react";
import App, { label } from "./App";

test("renders default version", () => {
  render(<App />);
  const linkElement = screen.getByText(/tdd playground/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders custom label", () => {
  render(<App />);
  const result = label("TDD playground");
  expect(result).toEqual("Hello TDD playground");
});
