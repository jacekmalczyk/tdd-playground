import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders default version", () => {
  render(<App />);
  const linkElement = screen.getByText(/tdd playground/i);
  expect(linkElement).toBeInTheDocument();
});
