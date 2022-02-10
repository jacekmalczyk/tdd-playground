import React from "react";
import { Header } from "./Header/Header";
import Counter from "./Counter/Counter";

function App() {
  return (
    <div>
      <Header />
      <Counter label={"Current"} />
    </div>
  );
}

export default App;
