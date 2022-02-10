import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Counter from "./Counter";

test("renders a label and a counter", () => {
  const handler = jest.fn();
  render(<Counter initialCount={0} onCounterIncrease={handler} />);
  const label = screen.getByLabelText("Count");
  expect(label).toBeInTheDocument();
  const counter = screen.getByRole("counter");
  expect(counter).toBeInTheDocument();
});

test("renders a counter with a custom label", () => {
  const handler = jest.fn();
  render(
    <Counter label={"Current"} initialCount={0} onCounterIncrease={handler} />
  );
  const label = screen.getByLabelText("Current");
  expect(label).toBeInTheDocument();
  const counter = screen.getByRole("counter");
  expect(counter).toBeInTheDocument();
});

test("should start at zero", () => {
  const handler = jest.fn();
  render(<Counter initialCount={0} onCounterIncrease={handler} />);
  const counter = screen.getByRole("counter");
  expect(counter).toHaveValue("0");
});

test("should start at ten", () => {
  const handler = jest.fn();
  render(<Counter initialCount={10} onCounterIncrease={handler} />);
  const counter = screen.getByRole("counter");
  expect(counter).toHaveValue("10");
});

test("should call the incrementer", () => {
  const handler = jest.fn();
  render(<Counter initialCount={0} onCounterIncrease={handler} />);
  const counter = screen.getByRole("counter");
  expect(counter).toHaveValue("0");
  fireEvent.click(counter);
  expect(handler).toBeCalledWith(false);
});
