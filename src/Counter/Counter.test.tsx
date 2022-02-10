import { render, screen } from "@testing-library/react";
import React from "react";
import Counter from "./Counter";

test("renders a label and a counter", () => {
  render(<Counter />);
  const label = screen.getByLabelText("Count");
  expect(label).toBeInTheDocument();
  const counter = screen.getByRole("counter");
  expect(counter).toBeInTheDocument();
});

test("renders a counter with a custom label", () => {
  render(<Counter label={"Current"} />);
  const label = screen.getByLabelText("Current");
  expect(label).toBeInTheDocument();
  const counter = screen.getByRole("counter");
  expect(counter).toBeInTheDocument();
});

test("should start at zero", () => {
  render(<Counter />);
  const counter = screen.getByRole("counter");
  expect(counter).toHaveValue("0");
});

test("should start at another value", () => {
  render(<Counter start={10} />);
  const counter = screen.getByRole("counter");
  expect(counter).toHaveValue("10");
});