import React from "react";

export type HeaderProps = {
  name?: string;
};

export function Header({ name = "React" }: HeaderProps) {
  return <h1>TDD playground {name}</h1>;
}
