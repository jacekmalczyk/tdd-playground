import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders default", () => {
  render(<App />);
  const title = screen.getByText(/tdd playground/i);
  expect(title).toBeInTheDocument();
  const label = screen.getByLabelText("Current");
  expect(label).toBeInTheDocument();
});
