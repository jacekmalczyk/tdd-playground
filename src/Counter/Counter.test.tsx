import { render, screen } from "@testing-library/react";
import React from "react";
import Counter from "./Counter";

test("renders a label and a counter", () => {
  render(<Counter />);
  const label = screen.getByLabelText("Count");
  expect(label).toBeInTheDocument();
  const counter = screen.getByRole("textbox");
  expect(counter).toBeInTheDocument();
});

test("renders a counter with a custom label", () => {
  render(<Counter label={"Current"} />);
  const label = screen.getByLabelText("Current");
  expect(label).toBeInTheDocument();
  const counter = screen.getByRole("textbox");
  expect(counter).toBeInTheDocument();
});
