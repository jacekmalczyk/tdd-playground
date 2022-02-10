import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders default", () => {
  render(<App />);
  const title = screen.getByText(/tdd playground/i);
  expect(title).toBeInTheDocument();
  const label = screen.getByLabelText("Current");
  expect(label).toBeInTheDocument();
  const counter = screen.getByRole("counter");
  expect(counter).toHaveValue("0");
});

test("updates state by click without shift", () => {
  render(<App />);
  const counter = screen.getByRole("counter");
  expect(counter).toHaveValue("0");
  userEvent.click(counter);
  expect(counter).toHaveValue("1");
});

test("updates state by click with shift", () => {
  render(<App />);
  const counter = screen.getByRole("counter");
  expect(counter).toHaveValue("0");
  userEvent.click(counter, { shiftKey: true });
  expect(counter).toHaveValue("10");
});
