import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import React from "react";

test("renders header", () => {
  render(<Header />);
  const title = screen.getByText(/tdd playground/i);
  expect(title).toBeInTheDocument();
});

test("renders header with argument", () => {
  render(<Header name={"supreme"} />);
  const title = screen.getByText(/tdd playground supreme/i);
  expect(title).toBeInTheDocument();
});
