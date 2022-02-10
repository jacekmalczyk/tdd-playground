import React from "react";

export function label(name: string) {
  return `Hello ${name}`;
}

function App() {
  return (
    <div>
      <h1>{label("TDD playground")}</h1>
    </div>
  );
}

export default App;
